"use strict";

tutao.provide('tutao.entity.sys.CreateGroupListData');

/**
 * @constructor
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.sys.CreateGroupListData = function(parent, data) {
  if (data) {
    this.__id = data._id;
    this._adminEncGroupInfoListKey = data.adminEncGroupInfoListKey;
    this._customerEncGroupInfoListKey = data.customerEncGroupInfoListKey;
    this._createGroupData = (data.createGroupData) ? new tutao.entity.sys.CreateGroupData(parent, data.createGroupData) : null;
  } else {
    this.__id = tutao.entity.EntityHelper.generateAggregateId();
    this._adminEncGroupInfoListKey = null;
    this._customerEncGroupInfoListKey = null;
    this._createGroupData = null;
  }
  this._parent = parent;
  this.prototype = tutao.entity.sys.CreateGroupListData.prototype;
};

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.sys.CreateGroupListData.prototype.toJsonData = function() {
  return {
    _id: this.__id, 
    adminEncGroupInfoListKey: this._adminEncGroupInfoListKey, 
    customerEncGroupInfoListKey: this._customerEncGroupInfoListKey, 
    createGroupData: tutao.entity.EntityHelper.aggregatesToJsonData(this._createGroupData)
  };
};

/**
 * The id of the CreateGroupListData type.
 */
tutao.entity.sys.CreateGroupListData.prototype.TYPE_ID = 365;

/**
 * The id of the adminEncGroupInfoListKey attribute.
 */
tutao.entity.sys.CreateGroupListData.prototype.ADMINENCGROUPINFOLISTKEY_ATTRIBUTE_ID = 368;

/**
 * The id of the customerEncGroupInfoListKey attribute.
 */
tutao.entity.sys.CreateGroupListData.prototype.CUSTOMERENCGROUPINFOLISTKEY_ATTRIBUTE_ID = 367;

/**
 * The id of the createGroupData attribute.
 */
tutao.entity.sys.CreateGroupListData.prototype.CREATEGROUPDATA_ATTRIBUTE_ID = 369;

/**
 * Sets the id of this CreateGroupListData.
 * @param {string} id The id of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.setId = function(id) {
  this.__id = id;
  return this;
};

/**
 * Provides the id of this CreateGroupListData.
 * @return {string} The id of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.getId = function() {
  return this.__id;
};

/**
 * Sets the adminEncGroupInfoListKey of this CreateGroupListData.
 * @param {string} adminEncGroupInfoListKey The adminEncGroupInfoListKey of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.setAdminEncGroupInfoListKey = function(adminEncGroupInfoListKey) {
  this._adminEncGroupInfoListKey = adminEncGroupInfoListKey;
  return this;
};

/**
 * Provides the adminEncGroupInfoListKey of this CreateGroupListData.
 * @return {string} The adminEncGroupInfoListKey of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.getAdminEncGroupInfoListKey = function() {
  return this._adminEncGroupInfoListKey;
};

/**
 * Sets the customerEncGroupInfoListKey of this CreateGroupListData.
 * @param {string} customerEncGroupInfoListKey The customerEncGroupInfoListKey of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.setCustomerEncGroupInfoListKey = function(customerEncGroupInfoListKey) {
  this._customerEncGroupInfoListKey = customerEncGroupInfoListKey;
  return this;
};

/**
 * Provides the customerEncGroupInfoListKey of this CreateGroupListData.
 * @return {string} The customerEncGroupInfoListKey of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.getCustomerEncGroupInfoListKey = function() {
  return this._customerEncGroupInfoListKey;
};

/**
 * Sets the createGroupData of this CreateGroupListData.
 * @param {tutao.entity.sys.CreateGroupData} createGroupData The createGroupData of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.setCreateGroupData = function(createGroupData) {
  this._createGroupData = createGroupData;
  return this;
};

/**
 * Provides the createGroupData of this CreateGroupListData.
 * @return {tutao.entity.sys.CreateGroupData} The createGroupData of this CreateGroupListData.
 */
tutao.entity.sys.CreateGroupListData.prototype.getCreateGroupData = function() {
  return this._createGroupData;
};
