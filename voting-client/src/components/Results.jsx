import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import createReactClass from 'create-react-class';

import Winner from './Winner';
import Tally from './Tally';
import Management from './Management';

export default createReactClass({
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