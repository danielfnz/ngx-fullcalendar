/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, IterableDiffers, Output, } from '@angular/core';
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
        return tslib_1.__assign({}, defaultConfig, this.removeUndefinedProperties(this.options), this.removeUndefinedProperties(configFromAttrs));
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
                for (var _b = tslib_1.__values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
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
export { FullCalendarComponent };
if (false) {
    /** @type {?} */
    FullCalendarComponent.prototype.droppableRef;
    /** @type {?} */
    FullCalendarComponent.prototype.options;
    /** @type {?} */
    FullCalendarComponent.prototype.events;
    /** @type {?} */
    FullCalendarComponent.prototype.resources;
    /** @type {?} */
    FullCalendarComponent.prototype.header;
    /** @type {?} */
    FullCalendarComponent.prototype.isRTL;
    /** @type {?} */
    FullCalendarComponent.prototype.weekends;
    /** @type {?} */
    FullCalendarComponent.prototype.hiddenDays;
    /** @type {?} */
    FullCalendarComponent.prototype.fixedWeekCount;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbers;
    /** @type {?} */
    FullCalendarComponent.prototype.businessHours;
    /** @type {?} */
    FullCalendarComponent.prototype.height;
    /** @type {?} */
    FullCalendarComponent.prototype.contentHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.aspectRatio;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimit;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultDate;
    /** @type {?} */
    FullCalendarComponent.prototype.editable;
    /** @type {?} */
    FullCalendarComponent.prototype.droppable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventStartEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDurationEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultView;
    /** @type {?} */
    FullCalendarComponent.prototype.allDaySlot;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayText;
    /** @type {?} */
    FullCalendarComponent.prototype.slotDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelInterval;
    /** @type {?} */
    FullCalendarComponent.prototype.snapDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.scrollTime;
    /** @type {?} */
    FullCalendarComponent.prototype.minTime;
    /** @type {?} */
    FullCalendarComponent.prototype.maxTime;
    /** @type {?} */
    FullCalendarComponent.prototype.slotEventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.nowIndicator;
    /** @type {?} */
    FullCalendarComponent.prototype.dragRevertDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.dragOpacity;
    /** @type {?} */
    FullCalendarComponent.prototype.dragScroll;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.eventConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.locale;
    /** @type {?} */
    FullCalendarComponent.prototype.timezone;
    /** @type {?} */
    FullCalendarComponent.prototype.timeFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.dayRender;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinks;
    /** @type {?} */
    FullCalendarComponent.prototype.onDayClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onDrop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventMouseover;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventMouseout;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDragStart;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDragStop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDrop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventReceive;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventResizeStart;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventResizeStop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventResize;
    /** @type {?} */
    FullCalendarComponent.prototype.onViewRender;
    /** @type {?} */
    FullCalendarComponent.prototype.onViewDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.onNavLinkDayClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onNavLinkWeekClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventRender;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventAfterRender;
    /** @type {?} */
    FullCalendarComponent.prototype.calendar;
    /** @type {?} */
    FullCalendarComponent.prototype.initialized;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDiffer;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceDiffer;
    /** @type {?} */
    FullCalendarComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdWxsY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvZnVsbGNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsZUFBZSxFQUlmLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQzs7SUFRakIsYUFBYSxHQUF3QjtJQUN6QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixXQUFXLEVBQUUsT0FBTztJQUNwQixVQUFVLEVBQUUsSUFBSTtJQUNoQixVQUFVLEVBQUUsU0FBUztJQUNyQixZQUFZLEVBQUUsVUFBVTtJQUN4QixVQUFVLEVBQUUsVUFBVTtJQUN0QixPQUFPLEVBQUUsVUFBVTtJQUNuQixPQUFPLEVBQUUsVUFBVTtJQUNuQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsVUFBVSxFQUFFLElBQUk7SUFDaEIsUUFBUSxFQUFFLEtBQUs7SUFDZixVQUFVLEVBQUUsSUFBSTtDQUNqQjtBQUVEO0lBNkVFLCtCQUFvQixFQUFjLEVBQ2hDLE9BQXdCO1FBRE4sT0FBRSxHQUFGLEVBQUUsQ0FBWTs7UUEzQnhCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hELHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFD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QUNqQyw0Q0FBOEI7O0lBQzlCLDhDQUE0Qjs7SUFDNUIsdUNBQXFCOztJQUNyQiw4Q0FBNEI7O0lBQzVCLDRDQUE2Qjs7SUFDN0IsMkNBQXlCOztJQUN6Qiw0Q0FBMEI7O0lBQzFCLHlDQUEyQjs7SUFDM0IsMENBQTRCOztJQUM1QixtREFBcUM7O0lBQ3JDLHNEQUF3Qzs7SUFDeEMsNENBQTZCOztJQUM3QiwyQ0FBNkI7O0lBQzdCLDJDQUE0Qjs7SUFDNUIsNkNBQTJCOztJQUMzQixrREFBZ0M7O0lBQ2hDLDZDQUEyQjs7SUFDM0IsMkNBQXlCOztJQUN6Qix3Q0FBc0I7O0lBQ3RCLHdDQUFzQjs7SUFDdEIsaURBQW1DOztJQUNuQyw2Q0FBK0I7O0lBQy9CLG1EQUFvQzs7SUFDcEMsNENBQTZCOztJQUM3QiwyQ0FBNkI7O0lBQzdCLDZDQUEyQjs7SUFDM0IsZ0RBQThCOztJQUM5Qix1Q0FBd0I7O0lBQ3hCLHlDQUFvQzs7SUFDcEMsMkNBQW1DOztJQUNuQywwQ0FBNkI7O0lBQzdCLHlDQUEyQjs7SUFHM0IsMkNBQTZEOztJQUM3RCx1Q0FBeUQ7O0lBQ3pELDZDQUErRDs7SUFDL0QsaURBQW1FOztJQUNuRSxnREFBa0U7O0lBQ2xFLGlEQUFtRTs7SUFDbkUsZ0RBQWtFOztJQUNsRSw0Q0FBOEQ7O0lBQzlELCtDQUFpRTs7SUFDakUsbURBQXFFOztJQUNyRSxrREFBb0U7O0lBQ3BFLDhDQUFnRTs7SUFDaEUsNkNBQStEOztJQUMvRCw4Q0FBZ0U7O0lBQ2hFLGtEQUFvRTs7SUFDcEUsbURBQXFFOztJQUNyRSw4Q0FBZ0U7O0lBQ2hFLCtDQUFpRTs7SUFDakUsbURBQXFFOztJQUdyRSx5Q0FBYzs7SUFDZCw0Q0FBcUI7O0lBQ3JCLDRDQUFpQjs7SUFDakIsK0NBQW9COztJQUNwQix1Q0FBWTs7Ozs7SUFFQSxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgSXRlcmFibGVEaWZmZXJzLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRPYmplY3QgfSBmcm9tICcuL2V2ZW50Lm9iamVjdCc7XHJcbmltcG9ydCB7IEZ1bGxDYWxlbmRhck9wdGlvbnMgfSBmcm9tICcuL2Z1bGxjYWxlbmRhci1vcHRpb25zJztcclxuaW1wb3J0IHsgUmVzb3VyY2VPYmplY3QgfSBmcm9tICcuL3Jlc291cmNlLW9iamVjdCc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEZ1bGxDYWxlbmRhcjogYW55O1xyXG5cclxuY29uc3QgZGVmYXVsdENvbmZpZzogRnVsbENhbGVuZGFyT3B0aW9ucyA9IHtcclxuICBhc3BlY3RSYXRpbzogMS4zNSxcclxuICBkZWZhdWx0VmlldzogJ21vbnRoJyxcclxuICBhbGxEYXlTbG90OiB0cnVlLFxyXG4gIGFsbERheVRleHQ6ICdhbGwtZGF5JyxcclxuICBzbG90RHVyYXRpb246ICcwMDozMDowMCcsXHJcbiAgc2Nyb2xsVGltZTogJzA2OjAwOjAwJyxcclxuICBtaW5UaW1lOiAnMDA6MDA6MDAnLFxyXG4gIG1heFRpbWU6ICcyNDowMDowMCcsXHJcbiAgc2xvdEV2ZW50T3ZlcmxhcDogdHJ1ZSxcclxuICBkcmFnUmV2ZXJ0RHVyYXRpb246IDUwMCxcclxuICBkcmFnT3BhY2l0eTogLjc1LFxyXG4gIGRyYWdTY3JvbGw6IHRydWUsXHJcbiAgdGltZXpvbmU6IGZhbHNlLFxyXG4gIHRpbWVGb3JtYXQ6IG51bGxcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWZ1bGxjYWxlbmRhcicsXHJcbiAgdGVtcGxhdGU6IGAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnVsbENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0NoZWNrZWQsIERvQ2hlY2ssIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGRyb3BwYWJsZVJlZjogYW55O1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEZ1bGxDYWxlbmRhck9wdGlvbnM7XHJcblxyXG4gIEBJbnB1dCgpIGV2ZW50czogQXJyYXk8RXZlbnRPYmplY3Q+O1xyXG4gIEBJbnB1dCgpIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VPYmplY3Q+O1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogYW55O1xyXG4gIEBJbnB1dCgpIGlzUlRMOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHdlZWtlbmRzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGhpZGRlbkRheXM6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGZpeGVkV2Vla0NvdW50OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1c2luZXNzSG91cnM6IGFueTtcclxuICBASW5wdXQoKSBoZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBjb250ZW50SGVpZ2h0OiBhbnk7XHJcbiAgQElucHV0KCkgYXNwZWN0UmF0aW86IG51bWJlcjtcclxuICBASW5wdXQoKSBldmVudExpbWl0OiBhbnk7XHJcbiAgQElucHV0KCkgZGVmYXVsdERhdGU6IGFueTtcclxuICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcm9wcGFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXZlbnRTdGFydEVkaXRhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV2ZW50RHVyYXRpb25FZGl0YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkZWZhdWx0Vmlldzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFsbERheVNsb3Q6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWxsRGF5VGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNsb3REdXJhdGlvbjogYW55O1xyXG4gIEBJbnB1dCgpIHNsb3RMYWJlbEludGVydmFsOiBhbnk7XHJcbiAgQElucHV0KCkgc25hcER1cmF0aW9uOiBhbnk7XHJcbiAgQElucHV0KCkgc2Nyb2xsVGltZTogYW55O1xyXG4gIEBJbnB1dCgpIG1pblRpbWU6IGFueTtcclxuICBASW5wdXQoKSBtYXhUaW1lOiBhbnk7XHJcbiAgQElucHV0KCkgc2xvdEV2ZW50T3ZlcmxhcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBub3dJbmRpY2F0b3I6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZHJhZ1JldmVydER1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZHJhZ09wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKSBkcmFnU2Nyb2xsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV2ZW50T3ZlcmxhcDogYW55O1xyXG4gIEBJbnB1dCgpIGV2ZW50Q29uc3RyYWludDogYW55O1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpbWV6b25lOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpbWVGb3JtYXQ6IHN0cmluZyB8IG51bGw7XHJcbiAgQElucHV0KCkgZGF5UmVuZGVyOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSBuYXZMaW5rczogYm9vbGVhbjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSBvbkRheUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25Ecm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudE1vdXNlb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnRNb3VzZW91dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnREcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50RHJhZ1N0b3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50RHJvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnRSZWNlaXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudFJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudFJlc2l6ZVN0b3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50UmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25WaWV3UmVuZGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25WaWV3RGVzdHJveTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uTmF2TGlua0RheUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25OYXZMaW5rV2Vla0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudFJlbmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnREZXN0cm95OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudEFmdGVyUmVuZGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyB0c2xpbnQ6ZW5hYmxlOm5vLW91dHB1dC1vbi1wcmVmaXhcclxuXHJcbiAgY2FsZW5kYXI6IGFueTtcclxuICBpbml0aWFsaXplZDogYm9vbGVhbjtcclxuICBldmVudERpZmZlcjogYW55O1xyXG4gIHJlc291cmNlRGlmZmVyOiBhbnk7XHJcbiAgY29uZmlnOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcclxuICAgIHRoaXMuZXZlbnREaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcclxuICAgIHRoaXMucmVzb3VyY2VEaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLnNhZmVHZW5lcmF0ZUNvbmZpZygpO1xyXG4gICAgdGhpcy5jb25maWcucmVzb3VyY2VzID0gKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKHRoaXMucmVzb3VyY2VzIHx8IFtdKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5kYXlDbGljayA9IChkYXRlLCBqc0V2ZW50LCB2aWV3LCByZXNvdXJjZUlkPykgPT4ge1xyXG4gICAgICB0aGlzLm9uRGF5Q2xpY2suZW1pdCh7XHJcbiAgICAgICAgJ2RhdGUnOiBkYXRlLFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXcsXHJcbiAgICAgICAgJ3Jlc291cmNlSWQnOiByZXNvdXJjZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmRyb3AgPSAoZGF0ZSwganNFdmVudCwgdWksIHJlc291cmNlSWQpID0+IHtcclxuICAgICAgdGhpcy5vbkRyb3AuZW1pdCh7XHJcbiAgICAgICAgJ2RhdGUnOiBkYXRlLFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAncmVzb3VyY2VJZCc6IHJlc291cmNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRDbGljayA9IChjYWxFdmVudCwganNFdmVudCwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLm9uRXZlbnRDbGljay5lbWl0KHtcclxuICAgICAgICAnY2FsRXZlbnQnOiBjYWxFdmVudCxcclxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnQsXHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmV2ZW50TW91c2VvdmVyID0gKGNhbEV2ZW50LCBqc0V2ZW50LCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMub25FdmVudE1vdXNlb3Zlci5lbWl0KHtcclxuICAgICAgICAnY2FsRXZlbnQnOiBjYWxFdmVudCxcclxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnQsXHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmV2ZW50TW91c2VvdXQgPSAoY2FsRXZlbnQsIGpzRXZlbnQsIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50TW91c2VvdXQuZW1pdCh7XHJcbiAgICAgICAgJ2NhbEV2ZW50JzogY2FsRXZlbnQsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudERyYWdTdGFydCA9IChldmVudCwganNFdmVudCwgdWksIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50RHJhZ1N0YXJ0LmVtaXQoe1xyXG4gICAgICAgICdldmVudCc6IGV2ZW50LFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnREcmFnU3RvcCA9IChldmVudCwganNFdmVudCwgdWksIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50RHJhZ1N0b3AuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudERyb3AgPSAoZXZlbnQsIGRlbHRhLCByZXZlcnRGdW5jLCBqc0V2ZW50LCB1aSwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLl91cGRhdGVFdmVudChldmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9uRXZlbnREcm9wLmVtaXQoe1xyXG4gICAgICAgICdldmVudCc6IGV2ZW50LFxyXG4gICAgICAgICdkZWx0YSc6IGRlbHRhLFxyXG4gICAgICAgICdyZXZlcnRGdW5jJzogcmV2ZXJ0RnVuYyxcclxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnQsXHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmV2ZW50UmVjZWl2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm9uRXZlbnRSZWNlaXZlLmVtaXQoe1xyXG4gICAgICAgICdldmVudCc6IGV2ZW50XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmV2ZW50UmVzaXplU3RhcnQgPSAoZXZlbnQsIGpzRXZlbnQsIHVpLCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMub25FdmVudFJlc2l6ZVN0YXJ0LmVtaXQoe1xyXG4gICAgICAgICdldmVudCc6IGV2ZW50LFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRSZXNpemVTdG9wID0gKGV2ZW50LCBqc0V2ZW50LCB1aSwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLm9uRXZlbnRSZXNpemVTdG9wLmVtaXQoe1xyXG4gICAgICAgICdldmVudCc6IGV2ZW50LFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRSZXNpemUgPSAoZXZlbnQsIGRlbHRhLCByZXZlcnRGdW5jLCBqc0V2ZW50LCB1aSwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLl91cGRhdGVFdmVudChldmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9uRXZlbnRSZXNpemUuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2RlbHRhJzogZGVsdGEsXHJcbiAgICAgICAgJ3JldmVydEZ1bmMnOiByZXZlcnRGdW5jLFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcudmlld1JlbmRlciA9ICh2aWV3LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgIHRoaXMub25WaWV3UmVuZGVyLmVtaXQoe1xyXG4gICAgICAgICd2aWV3JzogdmlldyxcclxuICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcudmlld0Rlc3Ryb3kgPSAodmlldywgZWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLm9uVmlld0Rlc3Ryb3kuZW1pdCh7XHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3LFxyXG4gICAgICAgICdlbGVtZW50JzogZWxlbWVudFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5uYXZMaW5rRGF5Q2xpY2sgPSAod2Vla1N0YXJ0LCBqc0V2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMub25OYXZMaW5rRGF5Q2xpY2suZW1pdCh7XHJcbiAgICAgICAgJ3dlZWtTdGFydCc6IHdlZWtTdGFydCxcclxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcubmF2TGlua1dlZWtDbGljayA9ICh3ZWVrU3RhcnQsIGpzRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5vbk5hdkxpbmtXZWVrQ2xpY2suZW1pdCh7XHJcbiAgICAgICAgJ3dlZWtTdGFydCc6IHdlZWtTdGFydCxcclxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRSZW5kZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50UmVuZGVyLmVtaXQoe1xyXG4gICAgICAgICdldmVudCc6IGV2ZW50LFxyXG4gICAgICAgICdlbGVtZW50JzogZWxlbWVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnREZXN0cm95ID0gKGV2ZW50LCBlbGVtZW50LCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMub25FdmVudERlc3Ryb3kuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudEFmdGVyUmVuZGVyID0gKGV2ZW50LCBlbGVtZW50LCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMub25FdmVudEFmdGVyUmVuZGVyLmVtaXQoe1xyXG4gICAgICAgICdldmVudCc6IGV2ZW50LFxyXG4gICAgICAgICdlbGVtZW50JzogZWxlbWVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jYWxlbmRhcikge1xyXG4gICAgICB0aGlzLmNhbGVuZGFyLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNhbGVuZGFyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gJ2V2ZW50cycpIHtcclxuICAgICAgICAgIHRoaXMuY2FsZW5kYXIub3B0aW9uKHByb3BOYW1lLCBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBjb25zdCBldmVudENoYW5nZXMgPSB0aGlzLmV2ZW50RGlmZmVyLmRpZmYodGhpcy5ldmVudHMpO1xyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXIgJiYgZXZlbnRDaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXIucmVtb3ZlRXZlbnRTb3VyY2VzKCk7XHJcbiAgICAgIGlmICh0aGlzLmV2ZW50cykge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXIuYWRkRXZlbnRTb3VyY2UodGhpcy5ldmVudHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzb3VyY2VDaGFuZ2VzID0gdGhpcy5yZXNvdXJjZURpZmZlci5kaWZmKHRoaXMucmVzb3VyY2VzKTtcclxuICAgIGlmICh0aGlzLmNhbGVuZGFyICYmIHJlc291cmNlQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLmNhbGVuZGFyLnJlZmV0Y2hSZXNvdXJjZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZSgpIHtcclxuICAgIEZ1bGxDYWxlbmRhci5kcmFndWxhKHtcclxuICAgICAgY29udGFpbmVyczogW3RoaXMuZHJvcHBhYmxlUmVmXSxcclxuICAgICAgY29weTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29uZmlnKTtcclxuICAgIHRoaXMuY2FsZW5kYXIucmVuZGVyKCk7XHJcbiAgICBpZiAodGhpcy5ldmVudHMpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhci5hZGRFdmVudFNvdXJjZSh0aGlzLmV2ZW50cyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2FmZUdlbmVyYXRlQ29uZmlnKCkge1xyXG4gICAgY29uc3QgY29uZmlnRnJvbUF0dHJzID0ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlciEsXHJcbiAgICAgIGlzUlRMOiB0aGlzLmlzUlRMISxcclxuICAgICAgd2Vla2VuZHM6IHRoaXMud2Vla2VuZHMhLFxyXG4gICAgICBoaWRkZW5EYXlzOiB0aGlzLmhpZGRlbkRheXMhLFxyXG4gICAgICBmaXhlZFdlZWtDb3VudDogdGhpcy5maXhlZFdlZWtDb3VudCEsXHJcbiAgICAgIHdlZWtOdW1iZXJzOiB0aGlzLndlZWtOdW1iZXJzISxcclxuICAgICAgYnVzaW5lc3NIb3VyczogdGhpcy5idXNpbmVzc0hvdXJzISxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCEsXHJcbiAgICAgIGNvbnRlbnRIZWlnaHQ6IHRoaXMuY29udGVudEhlaWdodCEsXHJcbiAgICAgIGFzcGVjdFJhdGlvOiB0aGlzLmFzcGVjdFJhdGlvISxcclxuICAgICAgZXZlbnRMaW1pdDogdGhpcy5ldmVudExpbWl0ISxcclxuICAgICAgZGVmYXVsdERhdGU6IHRoaXMuZGVmYXVsdERhdGUhLFxyXG4gICAgICBsb2NhbGU6IHRoaXMubG9jYWxlISxcclxuICAgICAgdGltZXpvbmU6IHRoaXMudGltZXpvbmUhLFxyXG4gICAgICB0aW1lRm9ybWF0OiB0aGlzLnRpbWVGb3JtYXQhLFxyXG4gICAgICBlZGl0YWJsZTogdGhpcy5lZGl0YWJsZSEsXHJcbiAgICAgIGRyb3BwYWJsZTogdGhpcy5kcm9wcGFibGUhLFxyXG4gICAgICBldmVudFN0YXJ0RWRpdGFibGU6IHRoaXMuZXZlbnRTdGFydEVkaXRhYmxlISxcclxuICAgICAgZXZlbnREdXJhdGlvbkVkaXRhYmxlOiB0aGlzLmV2ZW50RHVyYXRpb25FZGl0YWJsZSEsXHJcbiAgICAgIGRlZmF1bHRWaWV3OiB0aGlzLmRlZmF1bHRWaWV3ISxcclxuICAgICAgYWxsRGF5U2xvdDogdGhpcy5hbGxEYXlTbG90ISxcclxuICAgICAgYWxsRGF5VGV4dDogdGhpcy5hbGxEYXlUZXh0ISxcclxuICAgICAgc2xvdER1cmF0aW9uOiB0aGlzLnNsb3REdXJhdGlvbiEsXHJcbiAgICAgIHNsb3RMYWJlbEludGVydmFsOiB0aGlzLnNsb3RMYWJlbEludGVydmFsISxcclxuICAgICAgc25hcER1cmF0aW9uOiB0aGlzLnNuYXBEdXJhdGlvbiEsXHJcbiAgICAgIHNjcm9sbFRpbWU6IHRoaXMuc2Nyb2xsVGltZSEsXHJcbiAgICAgIG1pblRpbWU6IHRoaXMubWluVGltZSEsXHJcbiAgICAgIG1heFRpbWU6IHRoaXMubWF4VGltZSEsXHJcbiAgICAgIHNsb3RFdmVudE92ZXJsYXA6IHRoaXMuc2xvdEV2ZW50T3ZlcmxhcCEsXHJcbiAgICAgIG5vd0luZGljYXRvcjogdGhpcy5ub3dJbmRpY2F0b3IhLFxyXG4gICAgICBkcmFnUmV2ZXJ0RHVyYXRpb246IHRoaXMuZHJhZ1JldmVydER1cmF0aW9uISxcclxuICAgICAgZHJhZ09wYWNpdHk6IHRoaXMuZHJhZ09wYWNpdHkhLFxyXG4gICAgICBkcmFnU2Nyb2xsOiB0aGlzLmRyYWdTY3JvbGwhLFxyXG4gICAgICBldmVudE92ZXJsYXA6IHRoaXMuZXZlbnRPdmVybGFwISxcclxuICAgICAgZXZlbnRDb25zdHJhaW50OiB0aGlzLmV2ZW50Q29uc3RyYWludCEsXHJcbiAgICAgIGRheVJlbmRlcjogdGhpcy5kYXlSZW5kZXIhLFxyXG4gICAgICBuYXZMaW5rczogdGhpcy5uYXZMaW5rcyEsXHJcbiAgICAgIC8vIHRzbGludDplbmFibGU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmRlZmF1bHRDb25maWcsXHJcbiAgICAgIC4uLnRoaXMucmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyh0aGlzLm9wdGlvbnMpLFxyXG4gICAgICAuLi50aGlzLnJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXMoY29uZmlnRnJvbUF0dHJzKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZUV2ZW50KGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHNvdXJjZUV2ZW50ID0gdGhpcy5fZmluZEV2ZW50KGV2ZW50LmlkKTtcclxuICAgIGlmIChzb3VyY2VFdmVudCkge1xyXG4gICAgICBzb3VyY2VFdmVudC5zdGFydCA9IGV2ZW50LnN0YXJ0LmZvcm1hdCgpO1xyXG4gICAgICBpZiAoZXZlbnQuZW5kKSB7XHJcbiAgICAgICAgc291cmNlRXZlbnQuZW5kID0gZXZlbnQuZW5kLmZvcm1hdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5yZXNvdXJjZUlkKSB7XHJcbiAgICAgICAgc291cmNlRXZlbnQucmVzb3VyY2VJZCA9IGV2ZW50LnJlc291cmNlSWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbmRFdmVudChpZDogc3RyaW5nKSB7XHJcbiAgICBsZXQgZXZlbnQ7XHJcbiAgICBpZiAodGhpcy5ldmVudHMpIHtcclxuICAgICAgZm9yIChjb25zdCBlIG9mIHRoaXMuZXZlbnRzKSB7XHJcbiAgICAgICAgaWYgKGUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICBldmVudCA9IGU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIHJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXM8VD4ob2JqZWN0OiBPYmplY3QpOiBUIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnID8gb2JqZWN0IDoge30pKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==