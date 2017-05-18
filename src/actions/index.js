import 'whatwg-fetch'
import moment from 'moment'

export function action1(payload) {
    return {
        type: 'DO_SOMETHING',
        payload
    };
}

export const addComment = (payload) => {
	return {
		type: 'ADD_COMMENT',
		payload
	}
}

export const deleteComment = (id) => {
	return {
		type: 'DELETE_COMMENT',
		id
	}
}

// export function itemsFetchData(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));

//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }

//                 dispatch(itemsIsLoading(false));

//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)));
//     };
// }