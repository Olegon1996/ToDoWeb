import { configure, setAddon } from '@storybook/react';
import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit';

// automatically import all files ending in *.stories.js
configure([
    require.context('../src/components/TextField', true, /\.stories\.js$/),
    require.context('../src/components/ButtonAdd', true, /\.stories\.js$/),
    require.context('../src/components/NavigationButton', true, /\.stories\.js$/),
    require.context('../src/components/BadgeCount', true, /\.stories\.js$/),
], module);

setOptions({ theme: 'darcula', presets: ['react'] });
setAddon(LiveEdit);