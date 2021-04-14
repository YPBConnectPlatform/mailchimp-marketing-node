/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.38
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * ConnectedSites service.
 * @module api/ConnectedSitesApi
 */

/**
 * Constructs a new ConnectedSitesApi. 
 * @alias module:api/ConnectedSitesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Delete connected site
   * Remove a connected site from your Mailchimp account.
   * @param {String} connectedSiteId The unique identifier for the site.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.removeWithHttpInfo = function(connectedSiteId) {
    var postBody = null;

    // verify the required parameter 'connectedSiteId' is set
    if (connectedSiteId === undefined || connectedSiteId === null) {
      throw new Error("Missing the required parameter 'connectedSiteId' when calling ");
    }

    var pathParams = {
      'connected_site_id': connectedSiteId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/connected-sites/{connected_site_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete connected site
   * Remove a connected site from your Mailchimp account.
   * @param {String} connectedSiteId The unique identifier for the site.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.remove = function(connectedSiteId) {
    return this.removeWithHttpInfo(connectedSiteId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List connected sites
   * Get all connected sites in an account.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectedSites} and HTTP response
   */
  this.listWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/connected-sites', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List connected sites
   * Get all connected sites in an account.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectedSites}
   */
  this.list = function(opts) {
    return this.listWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get connected site
   * Get information about a specific connected site.
   * @param {String} connectedSiteId The unique identifier for the site.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectedSite} and HTTP response
   */
  this.getWithHttpInfo = function(connectedSiteId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'connectedSiteId' is set
    if (connectedSiteId === undefined || connectedSiteId === null) {
      throw new Error("Missing the required parameter 'connectedSiteId' when calling ");
    }

    var pathParams = {
      'connected_site_id': connectedSiteId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/connected-sites/{connected_site_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get connected site
   * Get information about a specific connected site.
   * @param {String} connectedSiteId The unique identifier for the site.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectedSite}
   */
  this.get = function(connectedSiteId, opts) {
    return this.getWithHttpInfo(connectedSiteId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Add connected site
   * Create a new Mailchimp connected site.
   * @param {module:model/ConnectedSite1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectedSite} and HTTP response
   */
  this.createWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/connected-sites', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add connected site
   * Create a new Mailchimp connected site.
   * @param {module:model/ConnectedSite1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectedSite}
   */
  this.create = function(body) {
    return this.createWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Verify connected site script
   * Verify that the connected sites script has been installed, either via the script URL or fragment.
   * @param {String} connectedSiteId The unique identifier for the site.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.verifyScriptInstallationWithHttpInfo = function(connectedSiteId) {
    var postBody = null;

    // verify the required parameter 'connectedSiteId' is set
    if (connectedSiteId === undefined || connectedSiteId === null) {
      throw new Error("Missing the required parameter 'connectedSiteId' when calling ");
    }

    var pathParams = {
      'connected_site_id': connectedSiteId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/connected-sites/{connected_site_id}/actions/verify-script-installation', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Verify connected site script
   * Verify that the connected sites script has been installed, either via the script URL or fragment.
   * @param {String} connectedSiteId The unique identifier for the site.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.verifyScriptInstallation = function(connectedSiteId) {
    return this.verifyScriptInstallationWithHttpInfo(connectedSiteId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
