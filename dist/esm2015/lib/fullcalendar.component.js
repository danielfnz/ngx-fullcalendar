/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, IterableDiffers, Output, } from '@angular/core';
/** @type {?} */
const defaultConfig = {
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
export class FullCalendarComponent {
    /**
     * @param {?} el
     * @param {?} differs
     */
    constructor(el, differs) {
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
    ngOnInit() {
        this.config = this.safeGenerateConfig();
        this.config.resources = (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => {
            callback(this.resources || []);
        });
        this.config.dayClick = (/**
         * @param {?} date
         * @param {?} jsEvent
         * @param {?} view
         * @param {?=} resourceId
         * @return {?}
         */
        (date, jsEvent, view, resourceId) => {
            this.onDayClick.emit({
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
        (date, jsEvent, ui, resourceId) => {
            this.onDrop.emit({
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
        (calEvent, jsEvent, view) => {
            this.onEventClick.emit({
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
        (calEvent, jsEvent, view) => {
            this.onEventMouseover.emit({
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
        (calEvent, jsEvent, view) => {
            this.onEventMouseout.emit({
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
        (event, jsEvent, ui, view) => {
            this.onEventDragStart.emit({
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
        (event, jsEvent, ui, view) => {
            this.onEventDragStop.emit({
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
        (event, delta, revertFunc, jsEvent, ui, view) => {
            this._updateEvent(event);
            this.onEventDrop.emit({
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
        (event) => {
            this.onEventReceive.emit({
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
        (event, jsEvent, ui, view) => {
            this.onEventResizeStart.emit({
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
        (event, jsEvent, ui, view) => {
            this.onEventResizeStop.emit({
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
        (event, delta, revertFunc, jsEvent, ui, view) => {
            this._updateEvent(event);
            this.onEventResize.emit({
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
        (view, element) => {
            this.onViewRender.emit({
                'view': view,
                'element': element
            });
        });
        this.config.viewDestroy = (/**
         * @param {?} view
         * @param {?} element
         * @return {?}
         */
        (view, element) => {
            this.onViewDestroy.emit({
                'view': view,
                'element': element
            });
        });
        this.config.navLinkDayClick = (/**
         * @param {?} weekStart
         * @param {?} jsEvent
         * @return {?}
         */
        (weekStart, jsEvent) => {
            this.onNavLinkDayClick.emit({
                'weekStart': weekStart,
                'jsEvent': jsEvent
            });
        });
        this.config.navLinkWeekClick = (/**
         * @param {?} weekStart
         * @param {?} jsEvent
         * @return {?}
         */
        (weekStart, jsEvent) => {
            this.onNavLinkWeekClick.emit({
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
        (event, element, view) => {
            this.onEventRender.emit({
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
        (event, element, view) => {
            this.onEventDestroy.emit({
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
        (event, element, view) => {
            this.onEventAfterRender.emit({
                'event': event,
                'element': element,
                'view': view
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.calendar) {
            this.calendar.destroy();
            this.initialized = false;
            this.calendar = null;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.calendar) {
            for (const propName in changes) {
                if (propName !== 'events') {
                    this.calendar.option(propName, changes[propName].currentValue);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const eventChanges = this.eventDiffer.diff(this.events);
        if (this.calendar && eventChanges) {
            this.calendar.removeEventSources();
            if (this.events) {
                this.calendar.addEventSource(this.events);
            }
        }
        /** @type {?} */
        const resourceChanges = this.resourceDiffer.diff(this.resources);
        if (this.calendar && resourceChanges) {
            this.calendar.refetchResources();
        }
    }
    /**
     * @private
     * @return {?}
     */
    initialize() {
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
    }
    /**
     * @private
     * @return {?}
     */
    safeGenerateConfig() {
        /** @type {?} */
        const configFromAttrs = {
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
        return Object.assign({}, defaultConfig, this.removeUndefinedProperties(this.options), this.removeUndefinedProperties(configFromAttrs));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _updateEvent(event) {
        /** @type {?} */
        const sourceEvent = this._findEvent(event.id);
        if (sourceEvent) {
            sourceEvent.start = event.start.format();
            if (event.end) {
                sourceEvent.end = event.end.format();
            }
            if (event.resourceId) {
                sourceEvent.resourceId = event.resourceId;
            }
        }
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    _findEvent(id) {
        /** @type {?} */
        let event;
        if (this.events) {
            for (const e of this.events) {
                if (e.id === id) {
                    event = e;
                    break;
                }
            }
        }
        return event;
    }
    /**
     * @template T
     * @param {?} object
     * @return {?}
     */
    removeUndefinedProperties(object) {
        return JSON.parse(JSON.stringify(typeof object === 'object' ? object : {}));
    }
}
FullCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-fullcalendar',
                template: ` `
            }] }
];
/** @nocollapse */
FullCalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: IterableDiffers }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdWxsY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvZnVsbGNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxlQUFlLEVBSWYsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDOztNQVFqQixhQUFhLEdBQXdCO0lBQ3pDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFlBQVksRUFBRSxVQUFVO0lBQ3hCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE9BQU8sRUFBRSxVQUFVO0lBQ25CLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixXQUFXLEVBQUUsR0FBRztJQUNoQixVQUFVLEVBQUUsSUFBSTtJQUNoQixRQUFRLEVBQUUsS0FBSztJQUNmLFVBQVUsRUFBRSxJQUFJO0NBQ2pCO0FBTUQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUF5RWhDLFlBQW9CLEVBQWMsRUFDaEMsT0FBd0I7UUFETixPQUFFLEdBQUYsRUFBRSxDQUFZOztRQTNCeEIsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEQscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsb0JBQWUsR0FBc0IsSUFB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MkNBQThCOztJQUM5QiwrQ0FBaUM7O0lBQ2pDLDRDQUE4Qjs7SUFDOUIsOENBQTRCOztJQUM1Qix1Q0FBcUI7O0lBQ3JCLDhDQUE0Qjs7SUFDNUIsNENBQTZCOztJQUM3QiwyQ0FBeUI7O0lBQ3pCLDRDQUEwQjs7SUFDMUIseUNBQTJCOztJQUMzQiwwQ0FBNEI7O0lBQzVCLG1EQUFxQzs7SUFDckMsc0RBQXdDOztJQUN4Qyw0Q0FBNkI7O0lBQzdCLDJDQUE2Qjs7SUFDN0IsMkNBQTRCOztJQUM1Qiw2Q0FBMkI7O0lBQzNCLGtEQUFnQzs7SUFDaEMsNkNBQTJCOztJQUMzQiwyQ0FBeUI7O0lBQ3pCLHdDQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0QixpREFBbUM7O0lBQ25DLDZDQUErQjs7SUFDL0IsbURBQW9DOztJQUNwQyw0Q0FBNkI7O0lBQzdCLDJDQUE2Qjs7SUFDN0IsNkNBQTJCOztJQUMzQixnREFBOEI7O0lBQzlCLHVDQUF3Qjs7SUFDeEIseUNBQW9DOztJQUNwQywyQ0FBbUM7O0lBQ25DLDBDQUE2Qjs7SUFDN0IseUNBQTJCOztJQUczQiwyQ0FBNkQ7O0lBQzdELHVDQUF5RDs7SUFDekQsNkNBQStEOztJQUMvRCxpREFBbUU7O0lBQ25FLGdEQUFrRTs7SUFDbEUsaURBQW1FOztJQUNuRSxnREFBa0U7O0lBQ2xFLDRDQUE4RDs7SUFDOUQsK0NBQWlFOztJQUNqRSxtREFBcUU7O0lBQ3JFLGtEQUFvRTs7SUFDcEUsOENBQWdFOztJQUNoRSw2Q0FBK0Q7O0lBQy9ELDhDQUFnRTs7SUFDaEUsa0RBQW9FOztJQUNwRSxtREFBcUU7O0lBQ3JFLDhDQUFnRTs7SUFDaEUsK0NBQWlFOztJQUNqRSxtREFBcUU7O0lBR3JFLHlDQUFjOztJQUNkLDRDQUFxQjs7SUFDckIsNENBQWlCOztJQUNqQiwrQ0FBb0I7O0lBQ3BCLHVDQUFZOzs7OztJQUVBLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDb21wb25lbnQsXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudE9iamVjdCB9IGZyb20gJy4vZXZlbnQub2JqZWN0JztcclxuaW1wb3J0IHsgRnVsbENhbGVuZGFyT3B0aW9ucyB9IGZyb20gJy4vZnVsbGNhbGVuZGFyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZU9iamVjdCB9IGZyb20gJy4vcmVzb3VyY2Utb2JqZWN0JztcclxuXHJcbmRlY2xhcmUgY29uc3QgRnVsbENhbGVuZGFyOiBhbnk7XHJcblxyXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBGdWxsQ2FsZW5kYXJPcHRpb25zID0ge1xyXG4gIGFzcGVjdFJhdGlvOiAxLjM1LFxyXG4gIGRlZmF1bHRWaWV3OiAnbW9udGgnLFxyXG4gIGFsbERheVNsb3Q6IHRydWUsXHJcbiAgYWxsRGF5VGV4dDogJ2FsbC1kYXknLFxyXG4gIHNsb3REdXJhdGlvbjogJzAwOjMwOjAwJyxcclxuICBzY3JvbGxUaW1lOiAnMDY6MDA6MDAnLFxyXG4gIG1pblRpbWU6ICcwMDowMDowMCcsXHJcbiAgbWF4VGltZTogJzI0OjAwOjAwJyxcclxuICBzbG90RXZlbnRPdmVybGFwOiB0cnVlLFxyXG4gIGRyYWdSZXZlcnREdXJhdGlvbjogNTAwLFxyXG4gIGRyYWdPcGFjaXR5OiAuNzUsXHJcbiAgZHJhZ1Njcm9sbDogdHJ1ZSxcclxuICB0aW1lem9uZTogZmFsc2UsXHJcbiAgdGltZUZvcm1hdDogbnVsbFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZnVsbGNhbGVuZGFyJyxcclxuICB0ZW1wbGF0ZTogYCBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGdWxsQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3Q2hlY2tlZCwgRG9DaGVjaywgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZHJvcHBhYmxlUmVmOiBhbnk7XHJcbiAgQElucHV0KCkgb3B0aW9uczogRnVsbENhbGVuZGFyT3B0aW9ucztcclxuXHJcbiAgQElucHV0KCkgZXZlbnRzOiBBcnJheTxFdmVudE9iamVjdD47XHJcbiAgQElucHV0KCkgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZU9iamVjdD47XHJcbiAgQElucHV0KCkgaGVhZGVyOiBhbnk7XHJcbiAgQElucHV0KCkgaXNSVEw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgd2Vla2VuZHM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGlkZGVuRGF5czogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZml4ZWRXZWVrQ291bnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgd2Vla051bWJlcnM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYnVzaW5lc3NIb3VyczogYW55O1xyXG4gIEBJbnB1dCgpIGhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGNvbnRlbnRIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBhc3BlY3RSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGV2ZW50TGltaXQ6IGFueTtcclxuICBASW5wdXQoKSBkZWZhdWx0RGF0ZTogYW55O1xyXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyb3BwYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBldmVudFN0YXJ0RWRpdGFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXZlbnREdXJhdGlvbkVkaXRhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRWaWV3OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWxsRGF5U2xvdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhbGxEYXlUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2xvdER1cmF0aW9uOiBhbnk7XHJcbiAgQElucHV0KCkgc2xvdExhYmVsSW50ZXJ2YWw6IGFueTtcclxuICBASW5wdXQoKSBzbmFwRHVyYXRpb246IGFueTtcclxuICBASW5wdXQoKSBzY3JvbGxUaW1lOiBhbnk7XHJcbiAgQElucHV0KCkgbWluVGltZTogYW55O1xyXG4gIEBJbnB1dCgpIG1heFRpbWU6IGFueTtcclxuICBASW5wdXQoKSBzbG90RXZlbnRPdmVybGFwOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5vd0luZGljYXRvcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnUmV2ZXJ0RHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBkcmFnT3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRyYWdTY3JvbGw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXZlbnRPdmVybGFwOiBhbnk7XHJcbiAgQElucHV0KCkgZXZlbnRDb25zdHJhaW50OiBhbnk7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGltZXpvbmU6IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGltZUZvcm1hdDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBkYXlSZW5kZXI6IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIG5hdkxpbmtzOiBib29sZWFuO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgQE91dHB1dCgpIG9uRGF5Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyb3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50TW91c2VvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudE1vdXNlb3V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudERyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnREcmFnU3RvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnREcm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudFJlY2VpdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50UmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50UmVzaXplU3RvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnRSZXNpemU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblZpZXdSZW5kZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblZpZXdEZXN0cm95OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25OYXZMaW5rRGF5Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbk5hdkxpbmtXZWVrQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50UmVuZGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25FdmVudERlc3Ryb3k6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50QWZ0ZXJSZW5kZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8vIHRzbGludDplbmFibGU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG5cclxuICBjYWxlbmRhcjogYW55O1xyXG4gIGluaXRpYWxpemVkOiBib29sZWFuO1xyXG4gIGV2ZW50RGlmZmVyOiBhbnk7XHJcbiAgcmVzb3VyY2VEaWZmZXI6IGFueTtcclxuICBjb25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xyXG4gICAgdGhpcy5ldmVudERpZmZlciA9IGRpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xyXG4gICAgdGhpcy5yZXNvdXJjZURpZmZlciA9IGRpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuc2FmZUdlbmVyYXRlQ29uZmlnKCk7XHJcbiAgICB0aGlzLmNvbmZpZy5yZXNvdXJjZXMgPSAoY2FsbGJhY2spID0+IHtcclxuICAgICAgY2FsbGJhY2sodGhpcy5yZXNvdXJjZXMgfHwgW10pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmRheUNsaWNrID0gKGRhdGUsIGpzRXZlbnQsIHZpZXcsIHJlc291cmNlSWQ/KSA9PiB7XHJcbiAgICAgIHRoaXMub25EYXlDbGljay5lbWl0KHtcclxuICAgICAgICAnZGF0ZSc6IGRhdGUsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICd2aWV3JzogdmlldyxcclxuICAgICAgICAncmVzb3VyY2VJZCc6IHJlc291cmNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZHJvcCA9IChkYXRlLCBqc0V2ZW50LCB1aSwgcmVzb3VyY2VJZCkgPT4ge1xyXG4gICAgICB0aGlzLm9uRHJvcC5lbWl0KHtcclxuICAgICAgICAnZGF0ZSc6IGRhdGUsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICdyZXNvdXJjZUlkJzogcmVzb3VyY2VJZFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudENsaWNrID0gKGNhbEV2ZW50LCBqc0V2ZW50LCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMub25FdmVudENsaWNrLmVtaXQoe1xyXG4gICAgICAgICdjYWxFdmVudCc6IGNhbEV2ZW50LFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRNb3VzZW92ZXIgPSAoY2FsRXZlbnQsIGpzRXZlbnQsIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50TW91c2VvdmVyLmVtaXQoe1xyXG4gICAgICAgICdjYWxFdmVudCc6IGNhbEV2ZW50LFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRNb3VzZW91dCA9IChjYWxFdmVudCwganNFdmVudCwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLm9uRXZlbnRNb3VzZW91dC5lbWl0KHtcclxuICAgICAgICAnY2FsRXZlbnQnOiBjYWxFdmVudCxcclxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnQsXHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmV2ZW50RHJhZ1N0YXJ0ID0gKGV2ZW50LCBqc0V2ZW50LCB1aSwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLm9uRXZlbnREcmFnU3RhcnQuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudERyYWdTdG9wID0gKGV2ZW50LCBqc0V2ZW50LCB1aSwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLm9uRXZlbnREcmFnU3RvcC5lbWl0KHtcclxuICAgICAgICAnZXZlbnQnOiBldmVudCxcclxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnQsXHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmV2ZW50RHJvcCA9IChldmVudCwgZGVsdGEsIHJldmVydEZ1bmMsIGpzRXZlbnQsIHVpLCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgIHRoaXMub25FdmVudERyb3AuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2RlbHRhJzogZGVsdGEsXHJcbiAgICAgICAgJ3JldmVydEZ1bmMnOiByZXZlcnRGdW5jLFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcclxuICAgICAgICAndmlldyc6IHZpZXdcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRSZWNlaXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMub25FdmVudFJlY2VpdmUuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb25maWcuZXZlbnRSZXNpemVTdGFydCA9IChldmVudCwganNFdmVudCwgdWksIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50UmVzaXplU3RhcnQuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudFJlc2l6ZVN0b3AgPSAoZXZlbnQsIGpzRXZlbnQsIHVpLCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMub25FdmVudFJlc2l6ZVN0b3AuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudFJlc2l6ZSA9IChldmVudCwgZGVsdGEsIHJldmVydEZ1bmMsIGpzRXZlbnQsIHVpLCB2aWV3KSA9PiB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgIHRoaXMub25FdmVudFJlc2l6ZS5lbWl0KHtcclxuICAgICAgICAnZXZlbnQnOiBldmVudCxcclxuICAgICAgICAnZGVsdGEnOiBkZWx0YSxcclxuICAgICAgICAncmV2ZXJ0RnVuYyc6IHJldmVydEZ1bmMsXHJcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy52aWV3UmVuZGVyID0gKHZpZXcsIGVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5vblZpZXdSZW5kZXIuZW1pdCh7XHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3LFxyXG4gICAgICAgICdlbGVtZW50JzogZWxlbWVudFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy52aWV3RGVzdHJveSA9ICh2aWV3LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgIHRoaXMub25WaWV3RGVzdHJveS5lbWl0KHtcclxuICAgICAgICAndmlldyc6IHZpZXcsXHJcbiAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLm5hdkxpbmtEYXlDbGljayA9ICh3ZWVrU3RhcnQsIGpzRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5vbk5hdkxpbmtEYXlDbGljay5lbWl0KHtcclxuICAgICAgICAnd2Vla1N0YXJ0Jzogd2Vla1N0YXJ0LFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5uYXZMaW5rV2Vla0NsaWNrID0gKHdlZWtTdGFydCwganNFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm9uTmF2TGlua1dlZWtDbGljay5lbWl0KHtcclxuICAgICAgICAnd2Vla1N0YXJ0Jzogd2Vla1N0YXJ0LFxyXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudFJlbmRlciA9IChldmVudCwgZWxlbWVudCwgdmlldykgPT4ge1xyXG4gICAgICB0aGlzLm9uRXZlbnRSZW5kZXIuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbmZpZy5ldmVudERlc3Ryb3kgPSAoZXZlbnQsIGVsZW1lbnQsIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50RGVzdHJveS5lbWl0KHtcclxuICAgICAgICAnZXZlbnQnOiBldmVudCxcclxuICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnQsXHJcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnLmV2ZW50QWZ0ZXJSZW5kZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHZpZXcpID0+IHtcclxuICAgICAgdGhpcy5vbkV2ZW50QWZ0ZXJSZW5kZXIuZW1pdCh7XHJcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXHJcbiAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50LFxyXG4gICAgICAgICd2aWV3Jzogdmlld1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXIuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXIpIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSAnZXZlbnRzJykge1xyXG4gICAgICAgICAgdGhpcy5jYWxlbmRhci5vcHRpb24ocHJvcE5hbWUsIGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFBhcmVudCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGNvbnN0IGV2ZW50Q2hhbmdlcyA9IHRoaXMuZXZlbnREaWZmZXIuZGlmZih0aGlzLmV2ZW50cyk7XHJcbiAgICBpZiAodGhpcy5jYWxlbmRhciAmJiBldmVudENoYW5nZXMpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhci5yZW1vdmVFdmVudFNvdXJjZXMoKTtcclxuICAgICAgaWYgKHRoaXMuZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhci5hZGRFdmVudFNvdXJjZSh0aGlzLmV2ZW50cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNvdXJjZUNoYW5nZXMgPSB0aGlzLnJlc291cmNlRGlmZmVyLmRpZmYodGhpcy5yZXNvdXJjZXMpO1xyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXIgJiYgcmVzb3VyY2VDaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXIucmVmZXRjaFJlc291cmNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplKCkge1xyXG4gICAgRnVsbENhbGVuZGFyLmRyYWd1bGEoe1xyXG4gICAgICBjb250YWluZXJzOiBbdGhpcy5kcm9wcGFibGVSZWZdLFxyXG4gICAgICBjb3B5OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jb25maWcpO1xyXG4gICAgdGhpcy5jYWxlbmRhci5yZW5kZXIoKTtcclxuICAgIGlmICh0aGlzLmV2ZW50cykge1xyXG4gICAgICB0aGlzLmNhbGVuZGFyLmFkZEV2ZW50U291cmNlKHRoaXMuZXZlbnRzKTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYWZlR2VuZXJhdGVDb25maWcoKSB7XHJcbiAgICBjb25zdCBjb25maWdGcm9tQXR0cnMgPSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICBoZWFkZXI6IHRoaXMuaGVhZGVyISxcclxuICAgICAgaXNSVEw6IHRoaXMuaXNSVEwhLFxyXG4gICAgICB3ZWVrZW5kczogdGhpcy53ZWVrZW5kcyEsXHJcbiAgICAgIGhpZGRlbkRheXM6IHRoaXMuaGlkZGVuRGF5cyEsXHJcbiAgICAgIGZpeGVkV2Vla0NvdW50OiB0aGlzLmZpeGVkV2Vla0NvdW50ISxcclxuICAgICAgd2Vla051bWJlcnM6IHRoaXMud2Vla051bWJlcnMhLFxyXG4gICAgICBidXNpbmVzc0hvdXJzOiB0aGlzLmJ1c2luZXNzSG91cnMhLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0ISxcclxuICAgICAgY29udGVudEhlaWdodDogdGhpcy5jb250ZW50SGVpZ2h0ISxcclxuICAgICAgYXNwZWN0UmF0aW86IHRoaXMuYXNwZWN0UmF0aW8hLFxyXG4gICAgICBldmVudExpbWl0OiB0aGlzLmV2ZW50TGltaXQhLFxyXG4gICAgICBkZWZhdWx0RGF0ZTogdGhpcy5kZWZhdWx0RGF0ZSEsXHJcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUhLFxyXG4gICAgICB0aW1lem9uZTogdGhpcy50aW1lem9uZSEsXHJcbiAgICAgIHRpbWVGb3JtYXQ6IHRoaXMudGltZUZvcm1hdCEsXHJcbiAgICAgIGVkaXRhYmxlOiB0aGlzLmVkaXRhYmxlISxcclxuICAgICAgZHJvcHBhYmxlOiB0aGlzLmRyb3BwYWJsZSEsXHJcbiAgICAgIGV2ZW50U3RhcnRFZGl0YWJsZTogdGhpcy5ldmVudFN0YXJ0RWRpdGFibGUhLFxyXG4gICAgICBldmVudER1cmF0aW9uRWRpdGFibGU6IHRoaXMuZXZlbnREdXJhdGlvbkVkaXRhYmxlISxcclxuICAgICAgZGVmYXVsdFZpZXc6IHRoaXMuZGVmYXVsdFZpZXchLFxyXG4gICAgICBhbGxEYXlTbG90OiB0aGlzLmFsbERheVNsb3QhLFxyXG4gICAgICBhbGxEYXlUZXh0OiB0aGlzLmFsbERheVRleHQhLFxyXG4gICAgICBzbG90RHVyYXRpb246IHRoaXMuc2xvdER1cmF0aW9uISxcclxuICAgICAgc2xvdExhYmVsSW50ZXJ2YWw6IHRoaXMuc2xvdExhYmVsSW50ZXJ2YWwhLFxyXG4gICAgICBzbmFwRHVyYXRpb246IHRoaXMuc25hcER1cmF0aW9uISxcclxuICAgICAgc2Nyb2xsVGltZTogdGhpcy5zY3JvbGxUaW1lISxcclxuICAgICAgbWluVGltZTogdGhpcy5taW5UaW1lISxcclxuICAgICAgbWF4VGltZTogdGhpcy5tYXhUaW1lISxcclxuICAgICAgc2xvdEV2ZW50T3ZlcmxhcDogdGhpcy5zbG90RXZlbnRPdmVybGFwISxcclxuICAgICAgbm93SW5kaWNhdG9yOiB0aGlzLm5vd0luZGljYXRvciEsXHJcbiAgICAgIGRyYWdSZXZlcnREdXJhdGlvbjogdGhpcy5kcmFnUmV2ZXJ0RHVyYXRpb24hLFxyXG4gICAgICBkcmFnT3BhY2l0eTogdGhpcy5kcmFnT3BhY2l0eSEsXHJcbiAgICAgIGRyYWdTY3JvbGw6IHRoaXMuZHJhZ1Njcm9sbCEsXHJcbiAgICAgIGV2ZW50T3ZlcmxhcDogdGhpcy5ldmVudE92ZXJsYXAhLFxyXG4gICAgICBldmVudENvbnN0cmFpbnQ6IHRoaXMuZXZlbnRDb25zdHJhaW50ISxcclxuICAgICAgZGF5UmVuZGVyOiB0aGlzLmRheVJlbmRlciEsXHJcbiAgICAgIG5hdkxpbmtzOiB0aGlzLm5hdkxpbmtzISxcclxuICAgICAgLy8gdHNsaW50OmVuYWJsZTpuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGVmYXVsdENvbmZpZyxcclxuICAgICAgLi4udGhpcy5yZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKHRoaXMub3B0aW9ucyksXHJcbiAgICAgIC4uLnRoaXMucmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhjb25maWdGcm9tQXR0cnMpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlRXZlbnQoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3Qgc291cmNlRXZlbnQgPSB0aGlzLl9maW5kRXZlbnQoZXZlbnQuaWQpO1xyXG4gICAgaWYgKHNvdXJjZUV2ZW50KSB7XHJcbiAgICAgIHNvdXJjZUV2ZW50LnN0YXJ0ID0gZXZlbnQuc3RhcnQuZm9ybWF0KCk7XHJcbiAgICAgIGlmIChldmVudC5lbmQpIHtcclxuICAgICAgICBzb3VyY2VFdmVudC5lbmQgPSBldmVudC5lbmQuZm9ybWF0KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LnJlc291cmNlSWQpIHtcclxuICAgICAgICBzb3VyY2VFdmVudC5yZXNvdXJjZUlkID0gZXZlbnQucmVzb3VyY2VJZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmluZEV2ZW50KGlkOiBzdHJpbmcpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmICh0aGlzLmV2ZW50cykge1xyXG4gICAgICBmb3IgKGNvbnN0IGUgb2YgdGhpcy5ldmVudHMpIHtcclxuICAgICAgICBpZiAoZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgIGV2ZW50ID0gZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllczxUPihvYmplY3Q6IE9iamVjdCk6IFQge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgPyBvYmplY3QgOiB7fSkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19