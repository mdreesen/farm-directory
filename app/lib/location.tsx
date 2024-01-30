export async function getLocation() {

    const success = (position: any) => {
        console.log(position)
    };
    const error = () => {
        return 'Cannot find position'
    };

    if (!navigator?.geolocation) return console.log('Geolocation API is not supported in this browser');

    console.log('Checking location...')
    const location = global.navigator.geolocation.getCurrentPosition(success, error)
    console.log(location);
};
