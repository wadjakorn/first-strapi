'use strict';

/**
 * short-link router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::short-link.short-link');
