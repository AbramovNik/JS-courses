import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {toggleAccordion} from "../../store/actions/accordion";


class AccordionComponent extends React.Component {

    onClickAccordion = () => this.props.openAccordion();

    render() {
        console.log(this.props)
        const { open } = this.props;
        const { title, content } = this.props;
        return <div className="panel">
            <h2 onClick={this.onClickAccordion}>{title}</h2>
            <p className={open ? "active" : "disable"}>{content}</p>
        </div>
    }
}

// Accordion.propTypes = {
//     title: PropTypes.string
// }

const mapStateToProps = state => ({
    open : state.accordion.isOpen
});

const mapDispatchToProps = dispatch => ({
    openAccordion: () => dispatch(toggleAccordion())
})

export const Accordion = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccordionComponent);