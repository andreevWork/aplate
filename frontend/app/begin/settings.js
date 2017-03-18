export default function (App) {
    const primary_color = 'teal';
    const accent_color = 'orange';
    const background_color = 'gray';
    const root_api = '/api';

    App.http.options.root = root_api;


    App.material.registerTheme('default', {
        primary: {
            color: primary_color,
            hue: '400'
        },
        accent: {
            color: accent_color,
            hue: '700'
        },
        background: {
            color: background_color,
            hue: 50
        }
    });
}