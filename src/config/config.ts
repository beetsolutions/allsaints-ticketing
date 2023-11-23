import {AuthProvider, Options} from "react-admin";
import { fetchUtils, DataProvider } from 'ra-core';
import { stringify } from 'query-string';

const host = "https://allsaints-api-production.up.railway.app/"
//const host = "https://web-production-dea6.up.railway.app/http://ec2-52-56-116-147.eu-west-2.compute.amazonaws.com:4545/"

const apiUrl = host + 'v1';
const httpClient = fetchUtils.fetchJson;

const options : Options = {
    user: {
        authenticated: true,
        token: `Bearer ${localStorage.getItem('auth')!!}`
    },
};

if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
}
    export const dataProvider: DataProvider = ({
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;


        const { json } = await httpClient(url, {
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        });

        return {
            data: json.data,
            total: json.total,
        };
    },

    getOne: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`
        const { json } = await httpClient(url, {
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        });
        return { data: json };
    },

    getMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const { json } = await httpClient(url, {
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        });
        return { data: json };
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const { json, headers } = await httpClient(url, {
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        });
        return {
            data: json
        };
    },

    create: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        })

        return { 'data': json.data };
    },

    update: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const { json } = await httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        })

        return { 'data': json.data };
    },

    updateMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const { json } = await httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        })
        return { data: json };
    },

    delete: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const { json } = await httpClient(url, {
            method: 'DELETE',
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        });
        return { data: json };
    },

    deleteMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const { json } = await httpClient(url, {
            method: 'DELETE',
            body: JSON.stringify(params),
            headers: new Headers({ Authorization: `Bearer ${localStorage.getItem('auth')!!}` })
        });
        return { data: json };
    },
    });


const fullName = localStorage.getItem('fullName');
const profileUrl = localStorage.getItem('profileUrl');

let userIdentity = {
    id: localStorage.getItem('id')!,
    fullName: fullName != null ? fullName! : "",
    avatar: profileUrl != null ? profileUrl! : ""
};
export const authProvider: AuthProvider = {
    login: ({phoneNumber, otp}) => {

        let url = host + 'v1/sms/request';

        if (phoneNumber && otp) {
            url =  host + 'v1/sms/verify'
        }

        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify({phoneNumber, otp}),
            headers: new Headers({'Content-Type': 'application/json'},)
        });

        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                if (otp == undefined) {
                    return {redirectTo: false};
                } else {
                    return response.json()
                        .then((auth: AuthData) => {
                            localStorage.setItem('auth', auth.data.jwt);
                            if (auth.data.firstName)
                                localStorage.setItem('firstName', auth.data.firstName);
                            if (auth.data.id)
                                localStorage.setItem('id', String(auth.data.id));
                            if (auth.data.lastName)
                                localStorage.setItem('lastName', auth.data.lastName);
                            if (auth.data.profileUrl)
                                localStorage.setItem('profileUrl', auth.data.profileUrl);
                            if (auth.data.name)
                                localStorage.setItem('fullName', auth.data.name);
                            return {redirectTo: false, path: 'dashboard'};
                        })
                }
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(userIdentity)
};

interface AuthData {
    data: UserData;
}

interface UserData {
    id?: number;
    profileUrl?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    mobileNumber?: string;
    jwt: string;
    team?: string;
}
