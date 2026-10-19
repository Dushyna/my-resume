import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, ExternalLink } from 'lucide-react';
import { experiences, educations } from './data';
import myAvatar from './assets/avatar.jpg';

export default function App() {
    return (
        <div className="min-h-screen bg-[#070a13] text-slate-300 font-sans antialiased py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-indigo-500 selection:text-white">

            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto bg-[#0f1424]/40 border border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">

                <aside className="lg:col-span-3 bg-[#0b0f19]/60 p-7 flex flex-col border-b lg:border-b-0 lg:border-r border-white/[0.05]">

                    <div className="w-44 h-44 rounded-2xl border border-white/10 overflow-hidden shadow-2xl mb-6 bg-[#161b2e] flex items-center justify-center shrink-0 mx-auto lg:mx-0 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]">
                        <img
                            src={myAvatar}
                            alt="Olga Dushyna"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "https://unsplash.com";
                            }}
                        />
                    </div>

                    <div className="text-center lg:text-left mb-8">
                        <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active
                        </div>
                        <h1 className="text-2xl font-black text-white tracking-tight mb-1 bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text ">Olga Dushyna</h1>
                        <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Fullstack-Entwicklerin</p>
                    </div>

                    <div className="space-y-5 text-xs border-t border-white/[0.06] pt-5">
                        <div className="flex items-start gap-3.5 group">
                            <MapPin className="w-4 h-4 text-slate-500 mt-0.5 group-hover:text-indigo-400 transition-colors" />
                            <div>
                                <p className="text-slate-500 font-bold tracking-wider uppercase text-[10px]">Adresse</p>
                                <p className="text-slate-200 font-medium mt-0.5">46238 Bottrop, DE</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3.5 group">
                            <Phone className="w-4 h-4 text-slate-500 mt-0.5 group-hover:text-indigo-400 transition-colors" />
                            <div>
                                <p className="text-slate-500 font-bold tracking-wider uppercase text-[10px]">Mobil</p>
                                <a href="tel:+4915124146054" className="text-slate-200 font-semibold hover:text-indigo-400 transition-colors block mt-0.5">+49 151 24146054</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-3.5 group">
                            <Mail className="w-4 h-4 text-slate-500 mt-0.5 group-hover:text-indigo-400 transition-colors" />
                            <div>
                                <p className="text-slate-500 font-bold tracking-wider uppercase text-[10px]">E-Mail</p>
                                <a href="mailto:olgadushynait@gmail.com" className="text-slate-200 font-semibold hover:text-indigo-400 transition-colors block mt-0.5">olgadushynait@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-3.5 group">
                            <svg className="w-4 h-4 text-slate-500 mt-0.5 group-hover:text-indigo-400 transition-colors fill-current" viewBox="0 0 24 24" >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <div>
                                <p className="text-slate-500 font-bold tracking-wider uppercase text-[10px]">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/olga-dushyna/?isSelfProfile=true" target="_blank" rel="noreferrer" className="text-slate-200 font-semibold hover:text-indigo-400 transition-colors inline-flex items-center gap-1 mt-0.5 underline decoration-white/10">
                                    Profile <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5 group">
                            <svg className="w-4 h-4 text-slate-500 mt-0.5 group-hover:text-indigo-400 transition-colors fill-current" viewBox="0 0 24 24" >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <div>
                                <p className="text-slate-500 font-bold tracking-wider uppercase text-[10px]">GitHub</p>
                                <a href="https://github.com/Dushyna" target="_blank" rel="noreferrer" className="text-slate-200 font-semibold hover:text-indigo-400 transition-colors inline-flex items-center gap-1 mt-0.5 underline decoration-white/10">
                                    Repositories <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="text-xs border-t border-white/[0.06] pt-5 mt-5">
                        <h3 className="font-bold text-indigo-400 uppercase tracking-widest mb-3.5 text-[10px]">Sprachen</h3>
                        <div className="space-y-2.5 text-slate-300 font-medium">
                            <div className="flex justify-between"><span>Ukrainisch</span> <span className="text-slate-500">Native</span></div>
                            <div className="flex justify-between"><span>Russisch</span> <span className="text-slate-500">Native</span></div>
                            <div className="flex justify-between"><span>Deutsch</span> <span className="text-emerald-400 font-extrabold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">B2</span></div>
                            <div className="flex justify-between"><span>Englisch</span> <span className="text-slate-500">A2</span></div>
                        </div>
                    </div>
                </aside>

                <main className="lg:col-span-6 p-7 space-y-6 bg-[#0f1424]/10 border-b lg:border-b-0 lg:border-r border-white/[0.05]">
                    <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        <h2 className="text-xs font-black text-white uppercase tracking-widest">Berufliche Erfahrung</h2>
                    </div>

                    <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-2 before:w-[1px] before:bg-white/[0.06]">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="space-y-2 relative pl-7 group/item">
                                <div className="absolute left-[5px] top-2 w-2 h-2 rounded-full bg-[#1b233d] border border-white/20 group-hover/item:bg-indigo-400 group-hover/item:border-indigo-400 group-hover/item:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"></div>

                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <span className="text-base font-extrabold text-white group-hover/item:text-indigo-400 transition-colors">{exp.role}</span>
                                    <span className="text-indigo-400 font-bold text-xs bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded shadow-sm whitespace-nowrap">{exp.period}</span>
                                </div>

                                <div className="text-slate-400 font-bold text-xs">
                                    {exp.company} • <span className="italic text-slate-500">{exp.location}</span>
                                </div>

                                {exp.project && (
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded my-0.5 inline-block shadow-sm">
                                        Projekt: {exp.project}
                                    </div>
                                )}

                                <p className="text-slate-300 leading-relaxed text-justify font-normal text-sm">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </main>

                <section className="lg:col-span-3 p-7 bg-[#0f1424]/30 space-y-6 overflow-y-auto">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                            <Code className="w-4 h-4 text-indigo-400" />
                            <h2 className="text-xs font-black text-white uppercase tracking-widest">Kenntnisse</h2>
                        </div>

                        <div className="space-y-3.5 text-xs">
                            <div className="bg-[#141b30]/50 border border-white/[0.04] p-3.5 rounded-xl relative overflow-hidden group hover:border-white/[0.08] transition-all">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
                                <span className="font-bold text-indigo-300 block mb-1.5 tracking-wide text-xs">Programmiersprachen</span>
                                <p className="text-slate-200 font-medium leading-relaxed">Java, JavaScript, TypeScript, Python, PHP, FoxPro</p>
                            </div>

                            <div className="bg-[#141b30]/50 border border-white/[0.04] p-3.5 rounded-xl relative overflow-hidden group hover:border-white/[0.08] transition-all">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
                                <span className="font-bold text-indigo-300 block mb-1.5 tracking-wide text-xs">Backend</span>
                                <p className="text-slate-200 font-medium leading-relaxed">Java 21(17), Spring Boot 3.x, Spring Security, Data JPA, Lombok, MapStruct, JWT</p>
                            </div>

                            <div className="bg-[#141b30]/50 border border-white/[0.04] p-3.5 rounded-xl relative overflow-hidden group hover:border-white/[0.08] transition-all">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 to-transparent"></div>
                                <span className="font-bold text-purple-300 block mb-1.5 tracking-wide text-xs">Frontend</span>
                                <p className="text-slate-200 font-medium leading-relaxed">React, Redux Toolkit, RTK Query, Formik, Yup, dnd-kit, Axios, Tailwind CSS</p>
                            </div>

                            <div className="bg-[#141b30]/50 border border-white/[0.04] p-3.5 rounded-xl relative overflow-hidden group hover:border-white/[0.08] transition-all">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-teal-500 to-transparent"></div>
                                <span className="font-bold text-teal-300 block mb-1.5 tracking-wide text-xs">Tools & DevOps</span>
                                <p className="text-slate-200 font-medium leading-relaxed">Vite, Gradle, Docker, Git</p>
                            </div>

                            <div className="bg-[#141b30]/50 border border-white/[0.04] p-3.5 rounded-xl relative overflow-hidden group hover:border-white/[0.08] transition-all">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-teal-500 to-transparent"></div>
                                <span className="font-bold text-teal-300 block mb-1.5 tracking-wide text-xs">Datenbanken</span>
                                <p className="text-slate-200 font-medium leading-relaxed">MySQL, PostgreSQL, MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 pt-1">
                        <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                            <GraduationCap className="w-4 h-4 text-purple-400" />
                            <h2 className="text-xs font-black text-white uppercase tracking-widest">Ausbildung</h2>
                        </div>

                        <div className="space-y-2.5 text-xs">
                            {educations.map((edu, idx) => (
                                <div key={idx} className="bg-[#141b30]/30 border border-white/[0.04] p-3 rounded-xl hover:border-indigo-500/30 hover:bg-[#141b30]/60 transition-all flex flex-col justify-between group/edu">
                                    <div>
                                        <h3 className="font-extrabold text-white text-[11px] group-hover/edu:text-indigo-400 transition-colors leading-tight">{edu.title}</h3>
                                        <p className="text-slate-400 text-[10px] mt-0.5 font-medium leading-tight">{edu.institution}</p>
                                    </div>
                                    <span className="text-slate-500 font-bold text-[9px] mt-2 block">{edu.period}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

            </div>

            <footer className="text-center py-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest relative z-10">
                © {new Date().getFullYear()} Olga Dushyna — Built with React & Tailwind CSS v4
            </footer>
        </div>
    );
}
