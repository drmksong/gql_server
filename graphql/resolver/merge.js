
import Event from '../../models/event';
import User from '../../models/user';

import dateToString from '../../helpers/date';

const transformEvent = event => {
    return {
        ...event._doc,
        _id : event.id,
        date : dateToString(event._doc.date),
        creator: user.bind(this, event.creator)
    }
};

const transformBooking = booking => {
    return {
        ...booking._doc,
        _id: booking.id,
        user:user.bind(this,booking._doc.user),
        event:bookedEvent.bind(this,booking._doc.event),
        createdAt: dateToString(booking._doc.createdAt),
        updatedAt: dateToString(booking._doc.updatedAt)
    }    
};

const events = async eventIds => {
    try {
        const events = await Event.find({_id: {$in: eventIds}});
        return events.map(event => {
            return transformEvent(event);
        });
    } catch(err){
        throw err;
    }
};

const user = async userId => {
    try {
        const user = await User.findById(userId);
        return {
            ...user._doc,
            _id: user.id,
            pass: null,
            createdEvents: events.bind(this, user._doc.createdEvents)
        }
    } catch(err) {
        throw err;
    }
};

const bookedEvent = async eventId => {
    try {
        console.log(eventId);
        const event = await Event.findById(eventId);
        return transformEvent(event);
    } catch(err) {
        throw err;
    }
};

export {transformEvent, transformBooking, events, user, bookedEvent};