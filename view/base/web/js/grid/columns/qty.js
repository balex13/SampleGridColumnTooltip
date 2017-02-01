/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'Magento_Ui/js/grid/columns/column',
    'jquery',
    'mage/template',
    'text!Magento_SampleGridColumnTooltip/template/grid/cells/qty/info.html',
    'mage/translate'
], function (Column, $, mageTemplate, qtyInfoTemplate, $t) {
    'use strict';

    return Column.extend({
        defaults: {
            bodyTmpl: 'Magento_SampleGridColumnTooltip/grid/cells/qty'
        },

        /**
         * @param {Object} row
         * @returns string
         */
        getTooltipHtml: function (row) {
            return mageTemplate(
                qtyInfoTemplate,
                {
                    data: {
                        row: row,
                        qtyTitle: $t('Quantity')
                    }
                }
            );
        }
    });
});
