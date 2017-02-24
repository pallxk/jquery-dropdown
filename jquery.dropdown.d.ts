// Type definitions for jquery-dropdown 2.0.3
// Project: http://labs.abeautifulsite.net/jquery-dropdown/
// Definitions: https://github.com/claviska/jquery-dropdown

/// <reference types="jquery" />

interface JQuery {
    // API
    /**
     * attach a jq-dropdown to the selected trigger element(s)
     * @param value A JQuery selector or JQuery instance
     */
    jqDropdown(method: 'attach', value: string|Element|Element[]|JQuery): JQuery;
    /** detach a jq-dropdown from the selected trigger element(s) */
    jqDropdown(method: 'detach'): JQuery;
    /** enables the jq-dropdown and removes the `jq-dropdown-disabled` class from the trigger */
    jqDropdown(method: 'enable'): JQuery;
    /** disables the jq-dropdown and adds the `jq-dropdown-disabled` class to the trigger */
    jqDropdown(method: 'disable'): JQuery;
    /** hide the jq-dropdown */
    jqDropdown(method: 'hide'): JQuery;
    /** show the jq-dropdown */
    jqDropdown(method: 'show'): JQuery;


    // Events
    /**
     * Attach an event handler function for 'show' event to the selected elements.
     * Triggered when the jq-dropdown is shown.
     */
    on(event: 'show', handler: (eventObject: JQueryEventObject, showEventParameter: JQueryDropdown.ShowEventParameter) => any): JQuery;
    /**
     * Attach an event handler function for 'hide' event to the selected elements.
     * Triggered when the jq-dropdown is hidden.
     */
    on(event: 'hide', handler: (eventObject: JQueryEventObject, hideEventParameter: JQueryDropdown.HideEventParameter) => any): JQuery;
}

declare namespace JQueryDropdown {
    interface ShowEventParameter {
        jqDropdown: JQuery;
        trigger: JQuery;
    }

    interface HideEventParameter {
        jqDropdown: JQuery;
    }
}
