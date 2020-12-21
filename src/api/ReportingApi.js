/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.26
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
 * Reporting service.
 * @module api/ReportingApi
 */

/**
 * Constructs a new ReportingApi. 
 * @alias module:api/ReportingApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * List facebook ads reports
   * Get reports of Facebook ads.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
   */
  this.getFacebookAdsReportAllWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset'],
      'sort_field': opts['sortField'],
      'sort_dir': opts['sortDir']
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
      '/reporting/facebook-ads', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List facebook ads reports
   * Get reports of Facebook ads.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
   */
  this.getFacebookAdsReportAll = function(opts) {
    return this.getFacebookAdsReportAllWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get facebook ad report
   * Get report of a Facebook ad.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20010} and HTTP response
   */
  this.getFacebookAdReportWithHttpInfo = function(outreachId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'outreachId' is set
    if (outreachId === undefined || outreachId === null) {
      throw new Error("Missing the required parameter 'outreachId' when calling ");
    }

    var pathParams = {
      'outreach_id': outreachId
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
      '/reporting/facebook-ads/{outreach_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get facebook ad report
   * Get report of a Facebook ad.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
   */
  this.getFacebookAdReport = function(outreachId, opts) {
    return this.getFacebookAdReportWithHttpInfo(outreachId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List facebook ecommerce report
   * Get breakdown of product activity for an outreach.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
   */
  this.getFacebookAdProductActivityReportWithHttpInfo = function(outreachId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'outreachId' is set
    if (outreachId === undefined || outreachId === null) {
      throw new Error("Missing the required parameter 'outreachId' when calling ");
    }

    var pathParams = {
      'outreach_id': outreachId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset'],
      'sort_field': opts['sortField']
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
      '/reporting/facebook-ads/{outreach_id}/ecommerce-product-activity', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List facebook ecommerce report
   * Get breakdown of product activity for an outreach.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
   */
  this.getFacebookAdProductActivityReport = function(outreachId, opts) {
    return this.getFacebookAdProductActivityReportWithHttpInfo(outreachId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List landing pages reports
   * Get reports of landing pages.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20011} and HTTP response
   */
  this.getLandingPageReportsAllWithHttpInfo = function(opts) {
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
      '/reporting/landing-pages', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List landing pages reports
   * Get reports of landing pages.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20011}
   */
  this.getLandingPageReportsAll = function(opts) {
    return this.getLandingPageReportsAllWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get landing page report
   * Get report of a landing page.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPageReport} and HTTP response
   */
  this.getLandingPageReportWithHttpInfo = function(outreachId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'outreachId' is set
    if (outreachId === undefined || outreachId === null) {
      throw new Error("Missing the required parameter 'outreachId' when calling ");
    }

    var pathParams = {
      'outreach_id': outreachId
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
      '/reporting/landing-pages/{outreach_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get landing page report
   * Get report of a landing page.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPageReport}
   */
  this.getLandingPageReport = function(outreachId, opts) {
    return this.getLandingPageReportWithHttpInfo(outreachId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
