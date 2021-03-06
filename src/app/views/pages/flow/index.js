// @flow
import React from 'react';
import Loadable from 'react-loadable';
import { compose, setDisplayName } from 'recompose';
import { Grid, Row, Col } from 'react-bootstrap';
import Loading from '../../components/Loading';

const Card = Loadable({
  loader: () => import('../../components/Card'),
  loading: Loading,
});

const Syntax = Loadable({
  loader: () => import('./syntax'),
  loading: Loading,
});
const enhance = compose(setDisplayName('flowPage'));

const ForEachFlow = (iterate: Array<number>): Array<number> => {
  const item = [];
  for (let i = 0; i < iterate.length; i += 1) {
    item[i] = iterate[i];
  }

  return item;
};

export default enhance(() => (
  <div className="content">
    <Grid fluid>
      <Row>
        <Col lg={12} sm={12}>
          <Card
            title="Flow"
            category="static declaration"
            source="https://github.com/facebook/flow"
            statsIcon="fa fa-history"
            content={
              <div className="table-full-width" style={{ padding: '30px' }}>
                <p>Static typing for javascript.</p>
                <Syntax
                  nativeType="Boolean"
                  sampleCode="var isFetching: boolean = false;"
                />
                <Syntax
                  nativeType="Number"
                  sampleCode="var luckyNumber: number = 10;var notSoLuckyNumber: number = NaN;"
                />
              </div>
            }
          />
        </Col>
        <Col lg={12} sm={12}>
          <Card
            title="Flow samples"
            content={
              <div>
                <h4>Reduce convoluted error handling</h4>
                {ForEachFlow([1, 2, 3])}
              </div>
            }
          />
        </Col>
      </Row>
    </Grid>
  </div>
));
