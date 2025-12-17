import { CalendarDays, Search, Users, Video } from 'lucide-react';
import { Link, useParams } from 'react-router';
import Container from '../../components/Container/Container';
import Clubs from './Clubs';
import Events from './Events';
import { useState } from 'react';

const Find = () => {
  const { query } = useParams();
  const source = query?.split('=')[1]?.toLowerCase();
  const [searchTermEvent, setSearchTermEvent] = useState('');
  const [searchTermClub, setSearchTermClub] = useState('');
  const [category, setCategory] = useState(null);
  const [sort, setSort] = useState(null);

  return (
    <Container className="mt-10 mb-20">
      {/* Select Events Or Clubs */}
      <div className="flex items-center gap-2.5 max-md:justify-center">
        <Link
          to="/find/source=Events"
          className={`text-[#232326] text-sm font-semibold flex items-center gap-2 py-2 px-3 ${
            source === 'events' &&
            'bg-[#1212150c] border border-[#12121519] rounded-full'
          }`}
        >
          <CalendarDays size={14} /> Events
        </Link>
        <Link
          to="/find/source=Clubs"
          className={`text-[#232326] text-sm font-semibold flex items-center gap-2 py-2 px-3 ${
            source === 'clubs' &&
            'bg-[#1212150c] border border-[#12121519] rounded-full'
          }`}
        >
          <Users size={14} /> Clubs
        </Link>
      </div>

      <div className="pt-5 flex items-center justify-between flex-col md:flex-row gap-5">
        <h1 className="text-3xl font-bold">
          {source === 'events' ? 'Events' : 'Clubs'} For You
        </h1>

        <div className="space-x-4 flex items-center">
          <label className="input w-60 outline-0 rounded-full">
            <Search size={20} color="#a2a2a3" />
            <input
              value={source === 'events' ? searchTermEvent : searchTermClub}
              onChange={e =>
                source === 'events'
                  ? setSearchTermEvent(e.target.value)
                  : setSearchTermClub(e.target.value)
              }
              type="search"
              required
              placeholder="Search"
            />
          </label>

          <select
            defaultValue="Category"
            className="select outline-0 rounded-full type w-40"
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            <option value="Social Activities">Social Activities</option>
            <option value="Hobbies & Passions">Hobbies & Passions</option>
            <option value="Sports & Fitness">Sports & Fitness</option>
            <option value="Travel & Outdoor">Travel & Outdoor</option>
          </select>

          <select
            defaultValue="Sort by"
            className="select outline-0 rounded-full type w-40"
            onChange={e => setSort(e.target.value)}
          >
            <option disabled>Sort by</option>
            <option value="">Default</option>
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
          </select>
        </div>
      </div>

      <div className="divider my-5 text-[#d0d0d4]"></div>

      {/* Event and group card */}
      <section className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {source === 'events' && (
          <section>
            <Events
              searchTermEvent={searchTermEvent}
              setSearchTermEvent={setSearchTermEvent}
              category={category}
              sort={sort}
            ></Events>
          </section>
        )}
        {source === 'clubs' && (
          <Clubs
            category={category}
            sort={sort}
            searchTermClub={searchTermClub}
            setSearchTermClub={setSearchTermClub}
          ></Clubs>
        )}
      </section>
    </Container>
  );
};

export default Find;
