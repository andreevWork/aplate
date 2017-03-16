export default function (App) {
    const theme_color = 'indigo';
    const background_color = 'gray';
    const root_api = '/api';

    App.http.options.root = root_api;


    App.material.registerTheme('default', {
        primary: {
            color: theme_color,
            hue: 'A700'
        },
        accent: {
            color: theme_color,
            hue: 'A200'
        },
        background: {
            color: background_color,
            hue: 50
        }
    });
}