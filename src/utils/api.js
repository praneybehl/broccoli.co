import axios from "axios";
const ENDPOINT = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

export const requestInvitation = (data, onSuccess, onError) => {
	const CancelToken = axios.CancelToken;
	const source = CancelToken.source();
	axios.post(ENDPOINT, data, {
			cancelToken: source.token,
			validateStatus: status => status >= 200 && status < 300
		})
		.then(response => {
			if (response.status === 200) {
				onSuccess();
			} else {
				onError(response.data.errorMessage);
			}
		})
		.catch(error => {
			onError(error.message);
		});
	return source.cancel;
};
