import { renderToStaticMarkup } from 'react-dom/server';
import Component from './component';

const result = renderToStaticMarkup(<Component />);

console.log(result);
