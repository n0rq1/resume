import React from 'react';

interface Playlist {
  id: string;
  name: string;
  description: string;
}

const playlists: Playlist[] = [
  {
    id: "", // Add your Spotify playlist ID here
    name: "Work Music",
    description: "Music for focused work sessions"
  },
  {
    id: "", // Add your Spotify playlist ID here
    name: "Gaming",
    description: "Energetic music for gaming sessions"
  },
  {
    id: "", // Add your Spotify playlist ID here
    name: "Relax",
    description: "Chill music for downtime"
  }
];

export const Music: React.FC = () => {
  return (
    <section id="music" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">My Soundtrack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.map((playlist, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {playlist.name}
              </h3>
              <p className="text-gray-600 mb-4">{playlist.description}</p>
              <iframe
                className="w-full h-64"
                src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
