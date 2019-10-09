(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-fullcalendar', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-fullcalendar'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultConfig = {
        aspectRatio: 1.35,
        defaultView: 'month',
        allDaySlot: true,
        allDayText: 'all-day',
        slotDuration: '00:30:00',
        scrollTime: '06:00:00',
        minTime: '00:00:00',
        maxTime: '24:00:00',
        slotEventOverlap: true,
        dragRevertDuration: 500,
        dragOpacity: .75,
        dragScroll: true,
        timezone: false,
        timeFormat: null
    };
    var FullCalendarComponent = /** @class */ (function () {
        function FullCalendarComponent(el, differs) {
            this.el = el;
            // tslint:disable:no-output-on-prefix
            this.onDayClick = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
            this.onEventClick = new core.EventEmitter();
            this.onEventMouseover = new core.EventEmitter();
            this.onEventMouseout = new core.EventEmitter();
            this.onEventDragStart = new core.EventEmitter();
            this.onEventDragStop = new core.EventEmitter();
            this.onEventDrop = new core.EventEmitter();
            this.onEventReceive = new core.EventEmitter();
            this.onEventResizeStart = new core.EventEmitter();
            this.onEventResizeStop = new core.EventEmitter();
            this.onEventResize = new core.EventEmitter();
            this.onViewRender = new core.EventEmitter();
            this.onViewDestroy = new core.EventEmitter();
            this.onNavLinkDayClick = new core.EventEmitter();
            this.onNavLinkWeekClick = new core.EventEmitter();
            this.onEventRender = new core.EventEmitter();
            this.onEventDestroy = new core.EventEmitter();
            this.onEventAfterRender = new core.EventEmitter();
            this.eventDiffer = differs.find([]).create(null);
            this.resourceDiffer = differs.find([]).create(null);
            this.initialized = false;
        }
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.config = this.safeGenerateConfig();
                this.config.resources = ( /**
                 * @param {?} callback
                 * @return {?}
                 */function (callback) {
                    callback(_this.resources || []);
                });
                this.config.dayClick = ( /**
                 * @param {?} date
                 * @param {?} jsEvent
                 * @param {?} view
                 * @param {?=} resourceId
                 * @return {?}
                 */function (date, jsEvent, view, resourceId) {
                    _this.onDayClick.emit({
                        'date': date,
                        'jsEvent': jsEvent,
                        'view': view,
                        'resourceId': resourceId
                    });
                });
                this.config.drop = ( /**
                 * @param {?} date
                 * @param {?} jsEvent
                 * @param {?} ui
                 * @param {?} resourceId
                 * @return {?}
                 */function (date, jsEvent, ui, resourceId) {
                    _this.onDrop.emit({
                        'date': date,
                        'jsEvent': jsEvent,
                        'resourceId': resourceId
                    });
                });
                this.config.eventClick = ( /**
                 * @param {?} calEvent
                 * @param {?} jsEvent
                 * @param {?} view
                 * @return {?}
                 */function (calEvent, jsEvent, view) {
                    _this.onEventClick.emit({
                        'calEvent': calEvent,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventMouseover = ( /**
                 * @param {?} calEvent
                 * @param {?} jsEvent
                 * @param {?} view
                 * @return {?}
                 */function (calEvent, jsEvent, view) {
                    _this.onEventMouseover.emit({
                        'calEvent': calEvent,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventMouseout = ( /**
                 * @param {?} calEvent
                 * @param {?} jsEvent
                 * @param {?} view
                 * @return {?}
                 */function (calEvent, jsEvent, view) {
                    _this.onEventMouseout.emit({
                        'calEvent': calEvent,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventDragStart = ( /**
                 * @param {?} event
                 * @param {?} jsEvent
                 * @param {?} ui
                 * @param {?} view
                 * @return {?}
                 */function (event, jsEvent, ui, view) {
                    _this.onEventDragStart.emit({
                        'event': event,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventDragStop = ( /**
                 * @param {?} event
                 * @param {?} jsEvent
                 * @param {?} ui
                 * @param {?} view
                 * @return {?}
                 */function (event, jsEvent, ui, view) {
                    _this.onEventDragStop.emit({
                        'event': event,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventDrop = ( /**
                 * @param {?} event
                 * @param {?} delta
                 * @param {?} revertFunc
                 * @param {?} jsEvent
                 * @param {?} ui
                 * @param {?} view
                 * @return {?}
                 */function (event, delta, revertFunc, jsEvent, ui, view) {
                    _this._updateEvent(event);
                    _this.onEventDrop.emit({
                        'event': event,
                        'delta': delta,
                        'revertFunc': revertFunc,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventReceive = ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    _this.onEventReceive.emit({
                        'event': event
                    });
                });
                this.config.eventResizeStart = ( /**
                 * @param {?} event
                 * @param {?} jsEvent
                 * @param {?} ui
                 * @param {?} view
                 * @return {?}
                 */function (event, jsEvent, ui, view) {
                    _this.onEventResizeStart.emit({
                        'event': event,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventResizeStop = ( /**
                 * @param {?} event
                 * @param {?} jsEvent
                 * @param {?} ui
                 * @param {?} view
                 * @return {?}
                 */function (event, jsEvent, ui, view) {
                    _this.onEventResizeStop.emit({
                        'event': event,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.eventResize = ( /**
                 * @param {?} event
                 * @param {?} delta
                 * @param {?} revertFunc
                 * @param {?} jsEvent
                 * @param {?} ui
                 * @param {?} view
                 * @return {?}
                 */function (event, delta, revertFunc, jsEvent, ui, view) {
                    _this._updateEvent(event);
                    _this.onEventResize.emit({
                        'event': event,
                        'delta': delta,
                        'revertFunc': revertFunc,
                        'jsEvent': jsEvent,
                        'view': view
                    });
                });
                this.config.viewRender = ( /**
                 * @param {?} view
                 * @param {?} element
                 * @return {?}
                 */function (view, element) {
                    _this.onViewRender.emit({
                        'view': view,
                        'element': element
                    });
                });
                this.config.viewDestroy = ( /**
                 * @param {?} view
                 * @param {?} element
                 * @return {?}
                 */function (view, element) {
                    _this.onViewDestroy.emit({
                        'view': view,
                        'element': element
                    });
                });
                this.config.navLinkDayClick = ( /**
                 * @param {?} weekStart
                 * @param {?} jsEvent
                 * @return {?}
                 */function (weekStart, jsEvent) {
                    _this.onNavLinkDayClick.emit({
                        'weekStart': weekStart,
                        'jsEvent': jsEvent
                    });
                });
                this.config.navLinkWeekClick = ( /**
                 * @param {?} weekStart
                 * @param {?} jsEvent
                 * @return {?}
                 */function (weekStart, jsEvent) {
                    _this.onNavLinkWeekClick.emit({
                        'weekStart': weekStart,
                        'jsEvent': jsEvent
                    });
                });
                this.config.eventRender = ( /**
                 * @param {?} event
                 * @param {?} element
                 * @param {?} view
                 * @return {?}
                 */function (event, element, view) {
                    _this.onEventRender.emit({
                        'event': event,
                        'element': element,
                        'view': view
                    });
                });
                this.config.eventDestroy = ( /**
                 * @param {?} event
                 * @param {?} element
                 * @param {?} view
                 * @return {?}
                 */function (event, element, view) {
                    _this.onEventDestroy.emit({
                        'event': event,
                        'element': element,
                        'view': view
                    });
                });
                this.config.eventAfterRender = ( /**
                 * @param {?} event
                 * @param {?} element
                 * @param {?} view
                 * @return {?}
                 */function (event, element, view) {
                    _this.onEventAfterRender.emit({
                        'event': event,
                        'element': element,
                        'view': view
                    });
                });
            };
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.calendar) {
                    this.calendar.destroy();
                    this.initialized = false;
                    this.calendar = null;
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        FullCalendarComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.calendar) {
                    for (var propName in changes) {
                        if (propName !== 'events') {
                            this.calendar.option(propName, changes[propName].currentValue);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (!this.initialized && this.el.nativeElement.offsetParent) {
                    this.initialize();
                }
            };
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var eventChanges = this.eventDiffer.diff(this.events);
                if (this.calendar && eventChanges) {
                    this.calendar.removeEventSources();
                    if (this.events) {
                        this.calendar.addEventSource(this.events);
                    }
                }
                /** @type {?} */
                var resourceChanges = this.resourceDiffer.diff(this.resources);
                if (this.calendar && resourceChanges) {
                    this.calendar.refetchResources();
                }
            };
        /**
         * @private
         * @return {?}
         */
        FullCalendarComponent.prototype.initialize = /**
         * @private
         * @return {?}
         */
            function () {
                FullCalendar.dragula({
                    containers: [this.droppableRef],
                    copy: true
                });
                this.calendar = new FullCalendar.Calendar(this.el.nativeElement, this.config);
                this.calendar.render();
                if (this.events) {
                    this.calendar.addEventSource(this.events);
                }
                this.initialized = true;
            };
        /**
         * @private
         * @return {?}
         */
        FullCalendarComponent.prototype.safeGenerateConfig = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var configFromAttrs = {
                    // tslint:disable:no-non-null-assertion
                    header: ( /** @type {?} */(this.header)),
                    isRTL: ( /** @type {?} */(this.isRTL)),
                    weekends: ( /** @type {?} */(this.weekends)),
                    hiddenDays: ( /** @type {?} */(this.hiddenDays)),
                    fixedWeekCount: ( /** @type {?} */(this.fixedWeekCount)),
                    weekNumbers: ( /** @type {?} */(this.weekNumbers)),
                    businessHours: ( /** @type {?} */(this.businessHours)),
                    height: ( /** @type {?} */(this.height)),
                    contentHeight: ( /** @type {?} */(this.contentHeight)),
                    aspectRatio: ( /** @type {?} */(this.aspectRatio)),
                    eventLimit: ( /** @type {?} */(this.eventLimit)),
                    defaultDate: ( /** @type {?} */(this.defaultDate)),
                    locale: ( /** @type {?} */(this.locale)),
                    timezone: ( /** @type {?} */(this.timezone)),
                    timeFormat: ( /** @type {?} */(this.timeFormat)),
                    editable: ( /** @type {?} */(this.editable)),
                    droppable: ( /** @type {?} */(this.droppable)),
                    eventStartEditable: ( /** @type {?} */(this.eventStartEditable)),
                    eventDurationEditable: ( /** @type {?} */(this.eventDurationEditable)),
                    defaultView: ( /** @type {?} */(this.defaultView)),
                    allDaySlot: ( /** @type {?} */(this.allDaySlot)),
                    allDayText: ( /** @type {?} */(this.allDayText)),
                    slotDuration: ( /** @type {?} */(this.slotDuration)),
                    slotLabelInterval: ( /** @type {?} */(this.slotLabelInterval)),
                    snapDuration: ( /** @type {?} */(this.snapDuration)),
                    scrollTime: ( /** @type {?} */(this.scrollTime)),
                    minTime: ( /** @type {?} */(this.minTime)),
                    maxTime: ( /** @type {?} */(this.maxTime)),
                    slotEventOverlap: ( /** @type {?} */(this.slotEventOverlap)),
                    nowIndicator: ( /** @type {?} */(this.nowIndicator)),
                    dragRevertDuration: ( /** @type {?} */(this.dragRevertDuration)),
                    dragOpacity: ( /** @type {?} */(this.dragOpacity)),
                    dragScroll: ( /** @type {?} */(this.dragScroll)),
                    eventOverlap: ( /** @type {?} */(this.eventOverlap)),
                    eventConstraint: ( /** @type {?} */(this.eventConstraint)),
                    dayRender: ( /** @type {?} */(this.dayRender)),
                    navLinks: ( /** @type {?} */(this.navLinks)),
                };
                return __assign({}, defaultConfig, this.removeUndefinedProperties(this.options), this.removeUndefinedProperties(configFromAttrs));
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FullCalendarComponent.prototype._updateEvent = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var sourceEvent = this._findEvent(event.id);
                if (sourceEvent) {
                    sourceEvent.start = event.start.format();
                    if (event.end) {
                        sourceEvent.end = event.end.format();
                    }
                    if (event.resourceId) {
                        sourceEvent.resourceId = event.resourceId;
                    }
                }
            };
        /**
         * @private
         * @param {?} id
         * @return {?}
         */
        FullCalendarComponent.prototype._findEvent = /**
         * @private
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var e_1, _a;
                /** @type {?} */
                var event;
                if (this.events) {
                    try {
                        for (var _b = __values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var e = _c.value;
                            if (e.id === id) {
                                event = e;
                                break;
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return event;
            };
        /**
         * @template T
         * @param {?} object
         * @return {?}
         */
        FullCalendarComponent.prototype.removeUndefinedProperties = /**
         * @template T
         * @param {?} object
         * @return {?}
         */
            function (object) {
                return JSON.parse(JSON.stringify(typeof object === 'object' ? object : {}));
            };
        FullCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-fullcalendar',
                        template: " "
                    }] }
        ];
        /** @nocollapse */
        FullCalendarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.IterableDiffers }
            ];
        };
        FullCalendarComponent.propDecorators = {
            droppableRef: [{ type: core.Input }],
            options: [{ type: core.Input }],
            events: [{ type: core.Input }],
            resources: [{ type: core.Input }],
            header: [{ type: core.Input }],
            isRTL: [{ type: core.Input }],
            weekends: [{ type: core.Input }],
            hiddenDays: [{ type: core.Input }],
            fixedWeekCount: [{ type: core.Input }],
            weekNumbers: [{ type: core.Input }],
            businessHours: [{ type: core.Input }],
            height: [{ type: core.Input }],
            contentHeight: [{ type: core.Input }],
            aspectRatio: [{ type: core.Input }],
            eventLimit: [{ type: core.Input }],
            defaultDate: [{ type: core.Input }],
            editable: [{ type: core.Input }],
            droppable: [{ type: core.Input }],
            eventStartEditable: [{ type: core.Input }],
            eventDurationEditable: [{ type: core.Input }],
            defaultView: [{ type: core.Input }],
            allDaySlot: [{ type: core.Input }],
            allDayText: [{ type: core.Input }],
            slotDuration: [{ type: core.Input }],
            slotLabelInterval: [{ type: core.Input }],
            snapDuration: [{ type: core.Input }],
            scrollTime: [{ type: core.Input }],
            minTime: [{ type: core.Input }],
            maxTime: [{ type: core.Input }],
            slotEventOverlap: [{ type: core.Input }],
            nowIndicator: [{ type: core.Input }],
            dragRevertDuration: [{ type: core.Input }],
            dragOpacity: [{ type: core.Input }],
            dragScroll: [{ type: core.Input }],
            eventOverlap: [{ type: core.Input }],
            eventConstraint: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            timezone: [{ type: core.Input }],
            timeFormat: [{ type: core.Input }],
            dayRender: [{ type: core.Input }],
            navLinks: [{ type: core.Input }],
            onDayClick: [{ type: core.Output }],
            onDrop: [{ type: core.Output }],
            onEventClick: [{ type: core.Output }],
            onEventMouseover: [{ type: core.Output }],
            onEventMouseout: [{ type: core.Output }],
            onEventDragStart: [{ type: core.Output }],
            onEventDragStop: [{ type: core.Output }],
            onEventDrop: [{ type: core.Output }],
            onEventReceive: [{ type: core.Output }],
            onEventResizeStart: [{ type: core.Output }],
            onEventResizeStop: [{ type: core.Output }],
            onEventResize: [{ type: core.Output }],
            onViewRender: [{ type: core.Output }],
            onViewDestroy: [{ type: core.Output }],
            onNavLinkDayClick: [{ type: core.Output }],
            onNavLinkWeekClick: [{ type: core.Output }],
            onEventRender: [{ type: core.Output }],
            onEventDestroy: [{ type: core.Output }],
            onEventAfterRender: [{ type: core.Output }]
        };
        return FullCalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxFullCalendarModule = /** @class */ (function () {
        function NgxFullCalendarModule() {
        }
        NgxFullCalendarModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            FullCalendarComponent
                        ],
                        imports: [],
                        exports: [
                            FullCalendarComponent
                        ]
                    },] }
        ];
        return NgxFullCalendarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxFullCalendarModule = NgxFullCalendarModule;
    exports.FullCalendarComponent = FullCalendarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-fullcalendar.umd.js.map