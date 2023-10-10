import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './public-path';

let root;

function render(props) {
    const { container } = props;
    root = createRoot(container || document.querySelector('#root'))
    root.render(<App />);
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[react18] react app bootstraped');
}

export async function mount(props) {
    render(props);
}

export async function unmount(props) {
    root.unmount()
}
