export default function Preferences({ data }) {
  if (!data) return null;
  
  const { onsite, startDate, travel } = data;

  const preferences = [
    {
      title: 'Arbeitsmodell',
      content: onsite,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      title: 'Verfügbarkeit',
      content: startDate,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5M9 12.75h6m-6 3h6" />
        </svg>
      )
    },
    {
      title: 'Mobilität',
      content: travel,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="c-space my-16">
      <div className="mb-8">
        <h3 className="grid-headtext mb-4">Arbeitspräferenzen</h3>
        <p className="grid-subtext max-w-2xl">
          Meine bevorzugten Arbeitsformen und Rahmenbedingungen für optimale Zusammenarbeit.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {preferences.map((pref, idx) => (
          <div 
            key={idx} 
            className="group grid-container hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                {pref.icon}
              </div>
              <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300 text-lg">
                {pref.title}
              </h4>
            </div>
            
            <div className="px-3 py-3 rounded-lg bg-black-200/30 border border-black-100/50 hover:bg-black-200/50 hover:border-purple-500/20 transition-all duration-200">
              <p className="grid-subtext text-sm leading-relaxed">{pref.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
