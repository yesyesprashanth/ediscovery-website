'use client';

import { motion } from 'framer-motion';
import { eventsData } from '@/data/events';
import styles from './styles.module.css';

const Events = () => {
  return (
    <section id="news" className={styles.eventsSection}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>News & Events</h2>
        <div className={styles.tableContainer}>
          <table className={styles.eventsTable}>
            <thead>
              <tr>
                <th>Exhibition / Symposium / Event</th>
                <th>Booth No</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {eventsData.map((event, index) => {
                // Parse the date more reliably
                const parseDateStr = (dateStr) => {
                  try {
                    // Remove ordinal indicators and clean up the string
                    dateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/g, '$1');
                    
                    // Handle date ranges by taking the first date
                    if (dateStr.includes('–') || dateStr.includes('-')) {
                      dateStr = dateStr.split(/[–-]/)[0].trim();
                    }
                    
                    // Extract month, day, and year
                    const dateParts = dateStr.match(/([A-Za-z]+)\s+(\d+)(?:\s*,\s*|\s+)(\d{4})/);
                    if (!dateParts) {
                      throw new Error('Invalid date format');
                    }
                    
                    const [_, month, day, year] = dateParts;
                    return new Date(`${month} ${day}, ${year}`);
                  } catch (error) {
                    console.warn('Error parsing date:', dateStr, error);
                    // Return a past date for invalid/unparseable dates
                    return new Date(0);
                  }
                };

                const eventDate = parseDateStr(event.date);
                const today = new Date();
                const isUpcoming = eventDate > today;

                console.log('Event:', event.name);
                console.log('Original Date:', event.date);
                console.log('Parsed Date:', eventDate instanceof Date ? eventDate.toISOString() : 'Invalid Date');
                console.log('Is Upcoming:', isUpcoming);
                console.log('Has Description:', Boolean(event.description));
                console.log('---');

                return (
                  <tr key={index} className={isUpcoming ? styles.upcomingEvent : styles.pastEvent}>
                    <td>
                      {event.website ? (
                        <strong>
                          <a href={event.website} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
                            {event.name}
                          </a>
                        </strong>
                      ) : (
                        <strong>{event.name}</strong>
                      )}
                      {event.location && <div className={styles.location}>{event.location}</div>}
                      {event.description && isUpcoming && (
                        <div className={styles.description}>
                          {event.description}
                          {event.time && <div className={styles.time}>Time: {event.time}</div>}
                        </div>
                      )}
                    </td>
                    <td className={styles.boothNo}>{event.boothNo}</td>
                    <td className={styles.date}>{event.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
