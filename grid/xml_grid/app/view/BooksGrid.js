/*
 * File: app/view/BooksGrid.js
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

Ext.define('Sencha.view.BooksGrid', {
    extend: 'Ext.grid.Panel',

    height: 200,
    width: 540,
    title: 'Xml Grid',
    store: 'Books',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Author',
                    flex: 1,
                    text: 'Author'
                },
                {
                    xtype: 'gridcolumn',
                    width: 180,
                    dataIndex: 'Title',
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    width: 115,
                    dataIndex: 'Manufacturer',
                    text: 'Manufacturer'
                },
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    dataIndex: 'ProductGroup',
                    text: 'Product Group'
                }
            ]
        });

        me.callParent(arguments);
    }

});