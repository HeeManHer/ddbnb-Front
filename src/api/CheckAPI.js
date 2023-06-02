export const checkLoginStatusAPICalls = () => {

    if(window.localStorage.getItem('jwtToken') == null) {

        return true;
    }

    return false;
}