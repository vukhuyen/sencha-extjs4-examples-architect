/*
 * File: app/view/ProductWindow.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.view.ProductWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.productwindow',

    requires: [
        'Sencha.view.ProductGridPanel'
    ],

    autoShow: true,
    height: 400,
    width: 700,
    layout: {
        type: 'fit'
    },
    title: 'Grid Filters Example',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'productgridpanel'
                }
            ]
        });

        me.callParent(arguments);
    }

});