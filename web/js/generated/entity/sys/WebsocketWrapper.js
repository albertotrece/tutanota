"use strict";

tutao.provide('tutao.entity.sys.WebsocketWrapper');

/**
 * @constructor
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.sys.WebsocketWrapper = function(data) {
  if (data) {
    this.__format = data._format;
    this._msgId = data.msgId;
    this._type = data.type;
    this._authentication = (data.authentication) ? new tutao.entity.sys.Authentication(this, data.authentication) : null;
    this._chat = (data.chat) ? new tutao.entity.sys.Chat(this, data.chat) : null;
    this._entityUpdate = (data.entityUpdate) ? new tutao.entity.sys.EntityUpdate(this, data.entityUpdate) : null;
    this._exception = (data.exception) ? new tutao.entity.sys.Exception(this, data.exception) : null;
  } else {
    this.__format = "0";
    this._msgId = null;
    this._type = null;
    this._authentication = null;
    this._chat = null;
    this._entityUpdate = null;
    this._exception = null;
  }
  this._entityHelper = new tutao.entity.EntityHelper(this);
  this.prototype = tutao.entity.sys.WebsocketWrapper.prototype;
};

/**
 * The version of the model this type belongs to.
 * @const
 */
tutao.entity.sys.WebsocketWrapper.MODEL_VERSION = '4';

/**
 * The encrypted flag.
 * @const
 */
tutao.entity.sys.WebsocketWrapper.prototype.ENCRYPTED = false;

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.sys.WebsocketWrapper.prototype.toJsonData = function() {
  return {
    _format: this.__format, 
    msgId: this._msgId, 
    type: this._type, 
    authentication: tutao.entity.EntityHelper.aggregatesToJsonData(this._authentication), 
    chat: tutao.entity.EntityHelper.aggregatesToJsonData(this._chat), 
    entityUpdate: tutao.entity.EntityHelper.aggregatesToJsonData(this._entityUpdate), 
    exception: tutao.entity.EntityHelper.aggregatesToJsonData(this._exception)
  };
};

/**
 * The id of the WebsocketWrapper type.
 */
tutao.entity.sys.WebsocketWrapper.prototype.TYPE_ID = 472;

/**
 * The id of the msgId attribute.
 */
tutao.entity.sys.WebsocketWrapper.prototype.MSGID_ATTRIBUTE_ID = 474;

/**
 * The id of the type attribute.
 */
tutao.entity.sys.WebsocketWrapper.prototype.TYPE_ATTRIBUTE_ID = 475;

/**
 * The id of the authentication attribute.
 */
tutao.entity.sys.WebsocketWrapper.prototype.AUTHENTICATION_ATTRIBUTE_ID = 476;

/**
 * The id of the chat attribute.
 */
tutao.entity.sys.WebsocketWrapper.prototype.CHAT_ATTRIBUTE_ID = 477;

/**
 * The id of the entityUpdate attribute.
 */
tutao.entity.sys.WebsocketWrapper.prototype.ENTITYUPDATE_ATTRIBUTE_ID = 478;

/**
 * The id of the exception attribute.
 */
tutao.entity.sys.WebsocketWrapper.prototype.EXCEPTION_ATTRIBUTE_ID = 479;

/**
 * Sets the format of this WebsocketWrapper.
 * @param {string} format The format of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.setFormat = function(format) {
  this.__format = format;
  return this;
};

/**
 * Provides the format of this WebsocketWrapper.
 * @return {string} The format of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.getFormat = function() {
  return this.__format;
};

/**
 * Sets the msgId of this WebsocketWrapper.
 * @param {string} msgId The msgId of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.setMsgId = function(msgId) {
  this._msgId = msgId;
  return this;
};

/**
 * Provides the msgId of this WebsocketWrapper.
 * @return {string} The msgId of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.getMsgId = function() {
  return this._msgId;
};

/**
 * Sets the type of this WebsocketWrapper.
 * @param {string} type The type of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.setType = function(type) {
  this._type = type;
  return this;
};

/**
 * Provides the type of this WebsocketWrapper.
 * @return {string} The type of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.getType = function() {
  return this._type;
};

/**
 * Sets the authentication of this WebsocketWrapper.
 * @param {tutao.entity.sys.Authentication} authentication The authentication of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.setAuthentication = function(authentication) {
  this._authentication = authentication;
  return this;
};

/**
 * Provides the authentication of this WebsocketWrapper.
 * @return {tutao.entity.sys.Authentication} The authentication of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.getAuthentication = function() {
  return this._authentication;
};

/**
 * Sets the chat of this WebsocketWrapper.
 * @param {tutao.entity.sys.Chat} chat The chat of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.setChat = function(chat) {
  this._chat = chat;
  return this;
};

/**
 * Provides the chat of this WebsocketWrapper.
 * @return {tutao.entity.sys.Chat} The chat of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.getChat = function() {
  return this._chat;
};

/**
 * Sets the entityUpdate of this WebsocketWrapper.
 * @param {tutao.entity.sys.EntityUpdate} entityUpdate The entityUpdate of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.setEntityUpdate = function(entityUpdate) {
  this._entityUpdate = entityUpdate;
  return this;
};

/**
 * Provides the entityUpdate of this WebsocketWrapper.
 * @return {tutao.entity.sys.EntityUpdate} The entityUpdate of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.getEntityUpdate = function() {
  return this._entityUpdate;
};

/**
 * Sets the exception of this WebsocketWrapper.
 * @param {tutao.entity.sys.Exception} exception The exception of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.setException = function(exception) {
  this._exception = exception;
  return this;
};

/**
 * Provides the exception of this WebsocketWrapper.
 * @return {tutao.entity.sys.Exception} The exception of this WebsocketWrapper.
 */
tutao.entity.sys.WebsocketWrapper.prototype.getException = function() {
  return this._exception;
};
