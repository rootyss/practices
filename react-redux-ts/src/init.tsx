import * as React from 'react';
import Card, { CardVariant } from './components/Card';

import "./style.scss";

export default () => (
  <div>
     <Card width="500px" height="500px" variant={CardVariant.outline} onClick={(num) => console.log(num)}>
       <button>Button</button>
     </Card>
  </div>
);

