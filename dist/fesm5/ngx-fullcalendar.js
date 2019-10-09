import { __assign, __values } from 'tslib';
import { Component, ElementRef, EventEmitter, Input, IterableDiffers, Output, NgModule } from '@angular/core';

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
        this.onDayClick = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onEventClick = new EventEmitter();
        this.onEventMouseover = new EventEmitter();
        this.onEventMouseout = new EventEmitter();
        this.onEventDragStart = new EventEmitter();
        this.onEventDragStop = new EventEmitter();
        this.onEventDrop = new EventEmitter();
        this.onEventReceive = new EventEmitter();
        this.onEventResizeStart = new EventEmitter();
        this.onEventResizeStop = new EventEmitter();
        this.onEventResize = new EventEmitter();
        this.onViewRender = new EventEmitter();
        this.onViewDestroy = new EventEmitter();
        this.onNavLinkDayClick = new EventEmitter();
        this.onNavLinkWeekClick = new EventEmitter();
        this.onEventRender = new EventEmitter();
        this.onEventDestroy = new EventEmitter();
        this.onEventAfterRender = new EventEmitter();
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
        this.config.resources = (/**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            callback(_this.resources || []);
        });
        this.config.dayClick = (/**
         * @param {?} date
         * @param {?} jsEvent
         * @param {?} view
         * @param {?=} resourceId
         * @return {?}
         */
        function (date, jsEvent, view, resourceId) {
            _this.onDayClick.emit({
                'date': date,
                'jsEvent': jsEvent,
                'view': view,
                'resourceId': resourceId
            });
        });
        this.config.drop = (/**
         * @param {?} date
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} resourceId
         * @return {?}
         */
        function (date, jsEvent, ui, resourceId) {
            _this.onDrop.emit({
                'date': date,
                'jsEvent': jsEvent,
                'resourceId': resourceId
            });
        });
        this.config.eventClick = (/**
         * @param {?} calEvent
         * @param {?} jsEvent
         * @param {?} view
         * @return {?}
         */
        function (calEvent, jsEvent, view) {
            _this.onEventClick.emit({
                'calEvent': calEvent,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventMouseover = (/**
         * @param {?} calEvent
         * @param {?} jsEvent
         * @param {?} view
         * @return {?}
         */
        function (calEvent, jsEvent, view) {
            _this.onEventMouseover.emit({
                'calEvent': calEvent,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventMouseout = (/**
         * @param {?} calEvent
         * @param {?} jsEvent
         * @param {?} view
         * @return {?}
         */
        function (calEvent, jsEvent, view) {
            _this.onEventMouseout.emit({
                'calEvent': calEvent,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventDragStart = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventDragStart.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventDragStop = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventDragStop.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventDrop = (/**
         * @param {?} event
         * @param {?} delta
         * @param {?} revertFunc
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, delta, revertFunc, jsEvent, ui, view) {
            _this._updateEvent(event);
            _this.onEventDrop.emit({
                'event': event,
                'delta': delta,
                'revertFunc': revertFunc,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventReceive = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.onEventReceive.emit({
                'event': event
            });
        });
        this.config.eventResizeStart = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventResizeStart.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventResizeStop = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventResizeStop.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventResize = (/**
         * @param {?} event
         * @param {?} delta
         * @param {?} revertFunc
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, delta, revertFunc, jsEvent, ui, view) {
            _this._updateEvent(event);
            _this.onEventResize.emit({
                'event': event,
                'delta': delta,
                'revertFunc': revertFunc,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.viewRender = (/**
         * @param {?} view
         * @param {?} element
         * @return {?}
         */
        function (view, element) {
            _this.onViewRender.emit({
                'view': view,
                'element': element
            });
        });
        this.config.viewDestroy = (/**
         * @param {?} view
         * @param {?} element
         * @return {?}
         */
        function (view, element) {
            _this.onViewDestroy.emit({
                'view': view,
                'element': element
            });
        });
        this.config.navLinkDayClick = (/**
         * @param {?} weekStart
         * @param {?} jsEvent
         * @return {?}
         */
        function (weekStart, jsEvent) {
            _this.onNavLinkDayClick.emit({
                'weekStart': weekStart,
                'jsEvent': jsEvent
            });
        });
        this.config.navLinkWeekClick = (/**
         * @param {?} weekStart
         * @param {?} jsEvent
         * @return {?}
         */
        function (weekStart, jsEvent) {
            _this.onNavLinkWeekClick.emit({
                'weekStart': weekStart,
                'jsEvent': jsEvent
            });
        });
        this.config.eventRender = (/**
         * @param {?} event
         * @param {?} element
         * @param {?} view
         * @return {?}
         */
        function (event, element, view) {
            _this.onEventRender.emit({
                'event': event,
                'element': element,
                'view': view
            });
        });
        this.config.eventDestroy = (/**
         * @param {?} event
         * @param {?} element
         * @param {?} view
         * @return {?}
         */
        function (event, element, view) {
            _this.onEventDestroy.emit({
                'event': event,
                'element': element,
                'view': view
            });
        });
        this.config.eventAfterRender = (/**
         * @param {?} event
         * @param {?} element
         * @param {?} view
         * @return {?}
         */
        function (event, element, view) {
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
            header: (/** @type {?} */ (this.header)),
            isRTL: (/** @type {?} */ (this.isRTL)),
            weekends: (/** @type {?} */ (this.weekends)),
            hiddenDays: (/** @type {?} */ (this.hiddenDays)),
            fixedWeekCount: (/** @type {?} */ (this.fixedWeekCount)),
            weekNumbers: (/** @type {?} */ (this.weekNumbers)),
            businessHours: (/** @type {?} */ (this.businessHours)),
            height: (/** @type {?} */ (this.height)),
            contentHeight: (/** @type {?} */ (this.contentHeight)),
            aspectRatio: (/** @type {?} */ (this.aspectRatio)),
            eventLimit: (/** @type {?} */ (this.eventLimit)),
            defaultDate: (/** @type {?} */ (this.defaultDate)),
            locale: (/** @type {?} */ (this.locale)),
            timezone: (/** @type {?} */ (this.timezone)),
            timeFormat: (/** @type {?} */ (this.timeFormat)),
            editable: (/** @type {?} */ (this.editable)),
            droppable: (/** @type {?} */ (this.droppable)),
            eventStartEditable: (/** @type {?} */ (this.eventStartEditable)),
            eventDurationEditable: (/** @type {?} */ (this.eventDurationEditable)),
            defaultView: (/** @type {?} */ (this.defaultView)),
            allDaySlot: (/** @type {?} */ (this.allDaySlot)),
            allDayText: (/** @type {?} */ (this.allDayText)),
            slotDuration: (/** @type {?} */ (this.slotDuration)),
            slotLabelInterval: (/** @type {?} */ (this.slotLabelInterval)),
            snapDuration: (/** @type {?} */ (this.snapDuration)),
            scrollTime: (/** @type {?} */ (this.scrollTime)),
            minTime: (/** @type {?} */ (this.minTime)),
            maxTime: (/** @type {?} */ (this.maxTime)),
            slotEventOverlap: (/** @type {?} */ (this.slotEventOverlap)),
            nowIndicator: (/** @type {?} */ (this.nowIndicator)),
            dragRevertDuration: (/** @type {?} */ (this.dragRevertDuration)),
            dragOpacity: (/** @type {?} */ (this.dragOpacity)),
            dragScroll: (/** @type {?} */ (this.dragScroll)),
            eventOverlap: (/** @type {?} */ (this.eventOverlap)),
            eventConstraint: (/** @type {?} */ (this.eventConstraint)),
            dayRender: (/** @type {?} */ (this.dayRender)),
            navLinks: (/** @type {?} */ (this.navLinks)),
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
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
        { type: Component, args: [{
                    selector: 'ngx-fullcalendar',
                    template: " "
                }] }
    ];
    /** @nocollapse */
    FullCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: IterableDiffers }
    ]; };
    FullCalendarComponent.propDecorators = {
        droppableRef: [{ type: Input }],
        options: [{ type: Input }],
        events: [{ type: Input }],
        resources: [{ type: Input }],
        header: [{ type: Input }],
        isRTL: [{ type: Input }],
        weekends: [{ type: Input }],
        hiddenDays: [{ type: Input }],
        fixedWeekCount: [{ type: Input }],
        weekNumbers: [{ type: Input }],
        businessHours: [{ type: Input }],
        height: [{ type: Input }],
        contentHeight: [{ type: Input }],
        aspectRatio: [{ type: Input }],
        eventLimit: [{ type: Input }],
        defaultDate: [{ type: Input }],
        editable: [{ type: Input }],
        droppable: [{ type: Input }],
        eventStartEditable: [{ type: Input }],
        eventDurationEditable: [{ type: Input }],
        defaultView: [{ type: Input }],
        allDaySlot: [{ type: Input }],
        allDayText: [{ type: Input }],
        slotDuration: [{ type: Input }],
        slotLabelInterval: [{ type: Input }],
        snapDuration: [{ type: Input }],
        scrollTime: [{ type: Input }],
        minTime: [{ type: Input }],
        maxTime: [{ type: Input }],
        slotEventOverlap: [{ type: Input }],
        nowIndicator: [{ type: Input }],
        dragRevertDuration: [{ type: Input }],
        dragOpacity: [{ type: Input }],
        dragScroll: [{ type: Input }],
        eventOverlap: [{ type: Input }],
        eventConstraint: [{ type: Input }],
        locale: [{ type: Input }],
        timezone: [{ type: Input }],
        timeFormat: [{ type: Input }],
        dayRender: [{ type: Input }],
        navLinks: [{ type: Input }],
        onDayClick: [{ type: Output }],
        onDrop: [{ type: Output }],
        onEventClick: [{ type: Output }],
        onEventMouseover: [{ type: Output }],
        onEventMouseout: [{ type: Output }],
        onEventDragStart: [{ type: Output }],
        onEventDragStop: [{ type: Output }],
        onEventDrop: [{ type: Output }],
        onEventReceive: [{ type: Output }],
        onEventResizeStart: [{ type: Output }],
        onEventResizeStop: [{ type: Output }],
        onEventResize: [{ type: Output }],
        onViewRender: [{ type: Output }],
        onViewDestroy: [{ type: Output }],
        onNavLinkDayClick: [{ type: Output }],
        onNavLinkWeekClick: [{ type: Output }],
        onEventRender: [{ type: Output }],
        onEventDestroy: [{ type: Output }],
        onEventAfterRender: [{ type: Output }]
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
        { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxFullCalendarModule, FullCalendarComponent };

//# sourceMappingURL=ngx-fullcalendar.js.map