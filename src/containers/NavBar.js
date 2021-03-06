import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import { Link } from 'react-router-dom';

class NavBar extends Component {
    renderTags(tags) {
        return _.map(tags, tag => {
            return (
                <p>{tag + ' '} </p>
            )
        })
    }

    render() {
        const { productData } = this.props;

        const image = _.map(productData, 'image');
        const title = _.map(productData, 'title');
        const subtitle = _.map(productData, 'subtitle');
        const tags = _.map(productData, 'tags');

        return (
            <div className="col-md-3" id="navbar">
                <img src={image} className="img-thumbnail" />
                <h3 align="middle">{ title }</h3>
                <hr></hr>
                <h7 align="middle">{ subtitle }</h7>
                <hr></hr>
                {this.renderTags({ tags })}
                <hr></hr>
                <a className="btn btn-primary btn-lg btn-block"  href="/overview">
                    <span className="glyphicon glyphicon-home" />
                    Overview
                </a>
                <a className="btn btn-primary btn-lg btn-block" href="/">
                    <span className="glyphicon glyphicon-equalizer" />
                    Sales
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productData : state.productData
    };
}

export default connect(mapStateToProps)(NavBar);