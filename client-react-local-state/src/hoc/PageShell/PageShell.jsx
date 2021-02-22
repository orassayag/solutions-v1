import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './PageShell.less';

const PageShell = (Container) => {
    return (props) => (
        <ReactCSSTransitionGroup
            transitionAppear={true}
            transitionAppearTimeout={600}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={200}
            transitionName={`Slide${Math.random() >= 0.5 ? 'In' : 'Out'}`}>
            <Container {...props} />
        </ReactCSSTransitionGroup>
    );
};
export default PageShell;