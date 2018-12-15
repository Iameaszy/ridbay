import React, { Component } from 'react';
import './card.css';
import moment from 'moment';
import axios from 'axios';
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { confirmation: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteCancel = this.handleDeleteCancel.bind(this);
    this.handleDeleteDelete = this.handleDeleteDelete.bind(this);
  }

  handleDelete() {
    this.setState({ confirmation: true });
  }
  handleDeleteCancel() {
    this.setState({ confirmation: false });
  }
  async handleDeleteDelete() {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      await axios.delete(
        `http://localhost:3000/website/${this.props.data.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      window.location.reload();
    } catch (err) {
      throw err;
    }
  }
  render() {
    const { data } = this.props;
    console.log(data);
    const { confirmation } = this.state;
    const deleteStyle = { display: confirmation ? 'flex' : 'none' };
    return (
      <aside className="Card">
        <div
          title={
            data.status && data.status === 'online'
              ? 'webite is active'
              : 'website is down'
          }
          className={
            data.status && data.status === 'online'
              ? 'Card-indicator_green'
              : 'Card-indicator_red'
          }
        />
        <h3 className="Card-title">
          <a href={data.url}>{data.name}</a>
        </h3>
        <ul className="Card-description_wrapper">
          <li className="Card-description">
            <p className="Card-description_label">
              Created {moment(data.createdAt).fromNow()}{' '}
            </p>
          </li>
          <li className="Card-description">
            <p className="Card-description_label">
              Modified {moment(data.updatedAt).fromNow()}
            </p>
          </li>
        </ul>
        <ul className="Card-action_wrapper">
          <div className="Card-action-inner_wrapper">
            <div style={deleteStyle} className="Card-delete_confirmation">
              <p>
                are you sure you want to stop monitoring this website?{' '}
                <span
                  className="Card-delete-confirmation_cancel"
                  onClick={this.handleDeleteCancel}>
                  &#10006;
                </span>{' '}
                <span
                  onClick={this.handleDeleteDelete}
                  role="img"
                  arial-labelledby="delete"
                  className="Card-delete-confirmation_delete">
                  &#10004;
                </span>{' '}
              </p>
            </div>
            <li className="Card-action_edit">
              <span>Edit</span>
            </li>
            <li className="Card-action_delete" onClick={this.handleDelete}>
              <span>Delete</span>
            </li>
          </div>
        </ul>
      </aside>
    );
  }
}
