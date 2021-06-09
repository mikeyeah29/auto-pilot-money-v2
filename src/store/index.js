import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'https://autopilot.rwdstaging.co.uk'

export default new Vuex.Store({
	state: {
		errors: [],
		success: '',
		loading: false,
		token: localStorage.getItem('token') || ''
	},
	mutations: {
		auth(state, token) {
			state.token = token;
		},
		logout(state) {
			localStorage.clear('token');
			state.token = '';
		},
		setLoading(state, loading) {
			state.loading = loading;
		},
		setSuccess(state, message) {
			state.success = message;
		},
		setError(state, eData) {

			if(!eData || eData.length < 1) {
				state.errors = [];
				return;
			}

			if(Array.isArray(eData)) {
				state.errors = eData;
				return;
			}

			if(typeof eData === 'string') {
				state.errors = [ eData ];
			}

			if(typeof eData === 'object') {
				if(eData.response) {
					if(eData.response.data) {
						if(eData.response.data.errors) {
							var errs = [];
							for (const [key, value] of Object.entries(eData.response.data.errors)) {
								console.log(key);
								errs.push(value[0]);
							}
							state.errors = errs;
							return;
						}
						state.errors = [eData.response.data.message];
						return;
					}
					state.errors = [eData.status + ': ' + eData.statusText];
				}
				if(eData.message) {
					state.errors = [eData.message];
					return;
				}
			}

			state.errors = [eData];

		}

	},
	actions: {
		login({commit}, loginData) {

			commit('setLoading', true);
			commit('setError', []);

			return new Promise((resolve) => {

				axios.post(baseUrl + '/api/auth/login', loginData)
					.then((res) => {
						var token = res.data.access_token;
						localStorage.setItem('token', token);
						axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
						commit('auth', token);
						commit('setLoading', false);
						resolve();
					})
					.catch((e) => {
						console.log('e.response ', e.response);
						commit('setError', e);
						commit('setLoading', false);
					});

			});

		}
	},
	getters: {
		isLoggedIn(state) {
			return !!state.token;
		}
	},
	modules: {

	}
})
