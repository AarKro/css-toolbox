import { createRoot } from 'react-dom/client';
import { App } from '@/App';

const body = document.querySelector('body')
const appRoot = document.createElement('div')

appRoot.id = 'css-toolbox'

if (body) {
  body.prepend(appRoot)
}


const container = document.getElementById('css-toolbox');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
