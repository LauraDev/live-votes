import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

import Winner from './Winner';
import Tally from './Tally';
import Management from './Management';

export const Results = createReactClass({
    mixins: [PureRenderMixin],
    render: function () {
        return this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} /> :
            <div className="results">
                <Tally {...this.props} />
                <Management {...this.props} />
            </div>;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    };
}

export const ResultsContainer = connect(
    mapStateToProps,
    actionCreators
)(Results);

