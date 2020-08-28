import format from 'date-fns/format';

export const googleCalendarUrl = (event) => {
  return encodeURI(`http://www.google.com/calendar/event?action=TEMPLATE&text=The Killer Limit at ${event.venue}&dates=${formatDate(event.datetime)}/${formatDate(event.datetime, true)}&ctz=Europe/London&location=${event.location}&description=The Killer Limit at ${event.venue}`);
}

const formatDate = (datetime, end) => {
  const date = new Date(datetime);
  if (end) {
    date.setHours(date.getHours()+5);
  }
  return format(new Date(date), "yyyyMMdd'T'HHmmss");
}

export const vCalendarUrl = (event) => {
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${event.url}
METHOD:PUBLISH
DTSTART:${formatDate(event.datetime)}Z
DTEND:${formatDate(event.datetime, true)}Z
DTSTAMP:${formatDate(event.datetime)}Z
SUMMARY:The Killer Limit at ${event.venue}
DESCRIPTION:The Killer Limit at ${event.venue}
LOCATION:${event.city}, ${event.country}
END:VEVENT
END:VCALENDAR`;
}

export const vCalHandler = (e) => {
  e.preventDefault();
  const url = e.currentTarget.getAttribute('href');
  if (url.startsWith('BEGIN')) {
    e.currentTarget.removeAttribute('target');
    const blob = new Blob([url], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `thekillerlimit.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  window.open(url);
}