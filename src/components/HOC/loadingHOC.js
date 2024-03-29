import React, { Component } from 'react';
import './loadingHOC.css';

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
    return class LoadingHOC extends Component {
        componentDidMount() {
            this.startTime = Date.now();
        }

        shouldComponentUpdate() {
            this.endTime = Date.now();
            return true;
        }

        render() {
            const myProps = {
                loadingTime: ((this.endTime - this.startTime) / 1000).toFixed(2)
            }

            return isEmpty(this.props[loadingProp]) ? <div className='loader' /> : <WrappedComponent {...this.props} {...myProps} />
        }
    }
}

export default LoadingHOC;