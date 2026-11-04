/* WoW Forever Guide by LarryL – Talent tooltips v0.19.2.
 * Client rank descriptions: https://wow-forever.gg/developers/talents.json
 * Attribution: Talent trees and statistics from WoW Forever, https://wow-forever.gg (CC BY 4.0)
 */
(function () {
  'use strict';
  const script = document.currentScript;
  const classSlug = script && script.getAttribute('data-class');
  const wrap = document.querySelector('#talents .full-tree-wrap');
  if (!classSlug || !wrap) return;

  const elements = Array.from(wrap.querySelectorAll('.tree-talent'));
  if (!elements.length) return;

  const dialog = document.createElement('div');
  dialog.id = 'forever-talent-tooltip';
  dialog.hidden = true;
  dialog.setAttribute('role', 'tooltip');
  document.body.append(dialog);

  let aliasData = {"aliases":{"hunter":{"Tödliche Aspekte":"Deadly Aspects","Belastbarkeit-Ausbildung":"Endurance Training","Konzentriertes Feuer":"Focused Fire","Verbesserter Aspekt des Affen":"Improved Aspect of the Monkey","Orientierung":"Pathfinding","Verbessertes Tier wiederbeleben":"Improved Revive Pet","Erhöhte Tiergeschwindigkeit":"Bestial Swiftness","Entfesselter Zorn":"Unleashed Fury","Verbessertes Tier heilen":"Improved Mend Pet","Wildheit":"Ferocity","Falke beschwören":"Summon Hawk","Geistbande":"Spirit Bond","Einschüchterung":"Intimidation","Wildtierdisziplin":"Bestial Discipline","Raserei":"Frenzy","Zorn des Wildtiers":"Bestial Wrath","Falkenauge":"Hawk Eye","Verbesserter erschütternder Schuss":"Improved Concussive Shot","Tödliche Angriffe":"Lethal Shots","Verbesserte Stiche und Bisse":"Improved Stings and Bites","Effizienz":"Efficiency","Sorgfältiges Zielen":"Careful Aim","Schneller Tod":"Rapid Killing","Verbesserter arkaner Schuss":"Improved Arcane Shot","Einsamer Wolf":"Lone Wolf","Aura des Volltreffers":"Trueshot Aura","Todbringende Schüsse":"Mortal Shots","Verbesserter Schlangenbiss":"Improved Serpent Sting","Rasche Erholung":"Rapid Recuperation","Sperrfeuer":"Barrage","Streuschuss":"Scatter Shot","Distanzwaffen-Spezialisierung":"Ranged Weapon Specialization","Heckenschützenschuss":"Sniper Shot","Verbessertes Fährtenlesen":"Improved Tracking","Abwehr":"Deflection","Einfangen":"Entrapment","Wilde Schläge":"Savage Strikes","Überlebenskünstler":"Survivalist","Verbessertes Zurechtstutzen":"Improved Wing Clip","Falleneffizienz":"Trap Efficiency","Sicherer Stand":"Surefooted","Abschreckung":"Deterrence","Überlebenstaktik":"Survival Tactics","Vorteil des Raubtiers":"Predator's Edge","Gegenangriff":"Counterattack","Improvisation":"Improvisation","Beute aufspüren":"Expose Prey","Disziplin des Überlebenskünstlers":"Survivalist's Discipline","Streichertritt":"Strider Kick","Blitzartige Reflexe":"Lightning Reflexes","Aufschlitzende Schläge":"Rending Strikes"},"priest":{"Macht im Licht":"Power of Light","Zauberstab-Spezialisierung":"Wand Specialization","Zwillingsdisziplinen":"Twin Disciplines","Schweigsame Entschlossenheit":"Silent Resolve","Heilige Präzision":"Holy Precision","Verbessertes Machtwort: Schild":"Improved Power Word: Shield","Märtyrertum":"Martyrdom","Mentale Beweglichkeit":"Mental Agility","Innerer Fokus":"Inner Focus","Meditation":"Meditation","Verbessertes inneres Feuer":"Improved Inner Fire","Mentale Stärke":"Mental Strength","Seelenwehr":"Soul Warding","Verbesserter Manabrand":"Improved Mana Burn","Sühne":"Penance","Erneuerte Hoffnung":"Renewed Hope","Göttliche Aegis":"Divine Aegis","Seele der Macht":"Power Infusion","Zwielichtfokus":"Twilight Focus","Verbesserte Erneuerung":"Improved Renew","Heiligspezialisierung":"Holy Specialization","Zauberschutz":"Spell Warding","Göttlicher Furor":"Divine Fury","Heilige Nova":"Holy Nova","Gesegnete Erholung":"Blessed Recovery","Inspiration":"Inspiration","Heilige Reichweite":"Holy Reach","Verbesserte Heilung":"Improved Healing","Sengendes Licht":"Searing Light","Heilige Bindung":"Holy Binding","Litanei des Lichts":"Litany of Light","Geist der Erlösung":"Spirit of Redemption","Geistige Führung":"Spiritual Guidance","Spirituelle Heilung":"Spiritual Healing","Gebet der Besserung":"Prayer of Mending","Schattenfokus":"Shadow Focus","Blackout":"Blackout","Willensentzug":"Spirit Tap","Schattenaffinität":"Shadow Affinity","Verbessertes Schattenwort: Schmerz":"Improved Shadow Word: Pain","Schattenreichweite":"Shadow Reach","Verbesserter Gedankenschlag":"Improved Mind Blast","Verbesserter psychischer Schrei":"Improved Psychic Scream","Gedankenschinden":"Mind Flay","Verbessertes Gedankenschinden":"Improved Mind Flay","Verbessertes Verblassen":"Improved Fade","Vampirumarmung":"Vampiric Embrace","Schattenwirken":"Shadow Weaving","Stille":"Silence","Verschlingende Ansteckung":"Devouring Plague","Vorzeitiges Ableben":"Premature Death","Dunkelheit":"Darkness","Schattengestalt":"Shadowform"},"warrior":{"Verbesserter heldenhafter Stoß":"Improved Heroic Strike","Abwehr":"Deflection","Verbessertes Verwunden":"Improved Rend","Verbesserter Sturmangriff":"Improved Charge","Verbesserter Taktiker":"Improved Tactical Mastery","Verbessertes Überwältigen":"Improved Overpower","Aggressionskontrolle":"Anger Management","Tiefe Wunden":"Deep Wounds","Aufspießender Stoß":"Spearing Strike","Zweihandwaffen-Spezialisierung":"Two-Handed Weapon Specialization","Durchbohren":"Impale","Rausch des Blutes":"Bloodthrill","Weitreichende Stöße":"Sweeping Strikes","Waffenmeister":"Weaponmaster","Verbessertes Zerschmettern":"Improved Slam","Verbesserte Kniesehne":"Improved Hamstring","Tödlicher Stoß":"Mortal Strike","Donnernde Stimme":"Booming Voice","Grausamkeit":"Cruelty","Eiserner Wille":"Iron Will","Entfesselter Zorn":"Unbridled Wrath","Verbessertes Spalten":"Improved Cleave","Durchdringendes Heulen":"Piercing Howl","Blutwahnsinn":"Blood Craze","Grenzenlose Wut":"Boundless Rage","Wutanfall":"Enrage","Beidhändigkeits-Spezialisierung":"Dual Wield Specialization","Wütende Schläge":"Raging Blows","Verbessertes Hinrichten":"Improved Execute","Reckless Swings":"Reckless Swings","Präzision":"Precision","Todeswunsch":"Death Wish","Verbessertes Abfangen":"Improved Intercept","Verbesserte Berserkerwut":"Improved Berserker Rage","Schlaghagel":"Flurry","Improved Whirlwind":"Improved Whirlwind","Blutdurst":"Bloodthirst","Schild-Spezialisierung":"Shield Specialization","Vorahnung":"Anticipation","Verbesserter Blutrausch":"Improved Bloodrage","Zähigkeit":"Toughness","Verbesserter Donnerknall":"Improved Thunder Clap","Letztes Gefecht":"Last Stand","Meister der Verteidigung":"Master of Defense","Verbesserte Rache":"Improved Revenge","Trotz":"Defiance","Verbessertes Rüstung zerreißen":"Improved Sunder Armor","Verbessertes Entwaffnen":"Improved Disarm","Frontkämpfer":"Vanguard","Verbesserter Schildwall":"Improved Shield Wall","Erschütternder Schlag":"Concussion Blow","Verbesserter Schildhieb":"Improved Shield Bash","Bastion":"Bastion","Fokussierte Wut":"Focused Rage","Schildschlag":"Shield Slam"},"druid":{"Zorn der Sterne":"Star's Wrath","Verbesserter Zorn":"Improved Wrath","Griff der Natur":"Nature's Grasp","Verbessertes Mondfeuer":"Improved Moonfire","Mondschein":"Moonglow","Insektenschwarm":"Insect Swarm","Gleichgewicht der Natur":"Nature's Balance","Mondkin-Gestalt":"Moonkin Form","Wildheit":"Ferocity","Wilder Angriff":"Feral Aggression","Tierinstinkt":"Feral Instinct","Dickes Fell":"Thick Hide","Wilde Schnelligkeit":"Feral Swiftness","Geschärfte Klauen":"Sharpened Claws","Urfuror":"Primal Fury","Raubtierinstinkte":"Predatory Instincts","Verbesserter Schreddern":"Improved Shred","Herz der Wildnis":"Heart of the Wild","Rudelführer":"Leader of the Pack","Aufschlitzen":"Ravage","Ursprünglicher Biss":"Primal Bite","Furor":"Furor","Verbesserte Heilende Berührung":"Improved Healing Touch","Naturalist":"Naturalist","Intensität":"Intensity","Omen der Klarsicht":"Omen of Clarity","Verbessertes Nachwachsen":"Improved Regrowth","Schnelligkeit der Natur":"Nature's Swiftness"},"mage":{"Zauberstab-Spezialisierung":"Wand Specialization","Arkaner Fokus":"Arcane Focus","Verbesserte Arkane Geschosse":"Improved Arcane Missiles","Arkane Konzentration":"Arcane Concentration","Arkane Meditation":"Arcane Meditation","Arkane Widerstandsfähigkeit":"Arcane Resilience","Geistesgegenwart":"Presence of Mind","Arkane Kraft":"Arcane Power","Verbesserter Feuerball":"Improved Fireball","Entzünden":"Ignite","Flammenwerfen":"Flame Throwing","Einschlag":"Impact","Pyroschlag":"Pyroblast","Kritische Masse":"Critical Mass","Verbrennung":"Combustion","Verbesserter Frostblitz":"Improved Frostbolt","Präzision":"Precision","Eissplitter":"Ice Shards","Frostbiss":"Frostbite","Frostkanalisierung":"Frost Channeling","Zertrümmern":"Shatter","Arktische Reichweite":"Arctic Reach","Kälteeinbruch":"Cold Snap","Eislanze":"Ice Lance","Finger des Frosts":"Fingers of Frost","Eisbarriere":"Ice Barrier","Verbesserter Kältekegel":"Improved Cone of Cold"},"paladin":{"Göttliche Stärke":"Divine Strength","Göttliche Intelligenz":"Divine Intellect","Spiritueller Fokus":"Spiritual Focus","Verbesserter Lichtblitz":"Improved Flash of Light","Gunst des Lichts":"Light's Favor","Heilige Macht":"Holy Power","Heiliger Schock":"Holy Shock","Verbesserte Aura der Hingabe":"Improved Devotion Aura","Redoubt":"Redoubt","Präzision":"Precision","Segen der Könige":"Blessing of Kings","Wächtergunst":"Guardian's Favor","Abrechnung":"Reckoning","Heiliger Schild":"Holy Shield","Verbesserter Segen der Macht":"Improved Blessing of Might","Segnung":"Benediction","Verbessertes Richturteil":"Improved Judgement","Überzeugung":"Conviction","Siegel des Befehls":"Seal of Command","Streben nach Gerechtigkeit":"Pursuit of Justice","Zweihandwaffen-Spezialisierung":"Two-Handed Weapon Specialization","Vergeltung":"Vengeance","Aura der Heiligkeit":"Sanctity Aura","Heiliger Stoß":"Holy Strike","Buße":"Repentance"},"rogue":{"Bosheit":"Malice","Skrupellosigkeit":"Ruthlessness","Tödlichkeit":"Lethality","Verbessertes Ausweiden":"Improved Eviscerate","Mord":"Murder","Skrupelloser Angriff":"Relentless Strikes","Kaltblütigkeit":"Cold Blood","Siegel des Schicksals":"Seal Fate","Verbesserter Finsterer Stoß":"Improved Sinister Strike","Blitzartige Reflexe":"Lightning Reflexes","Abwehr":"Deflection","Riposte":"Riposte","Präzision":"Precision","Beidhändigkeits-Spezialisierung":"Dual Wield Specialization","Klingenwirbel":"Blade Flurry","Waffenexperte":"Weapon Expertise","Aggression":"Aggression","Adrenalinrausch":"Adrenaline Rush","Verbesserter Sprint":"Improved Sprint","Gelegenheit":"Opportunity","Meister der Täuschung":"Master of Deception","Verbesserter Hinterhalt":"Improved Ambush","Vorbereitung":"Preparation","Hemorrhage":"Hemorrhage","Heimtücke":"Dirty Deeds"},"shaman":{"Erschütterung":"Concussion","Konvektion":"Convection","Ruf der Flamme":"Call of Flame","Elementar-Fokus":"Elemental Focus","Elementare Verwüstung":"Elemental Devastation","Auge des Sturms":"Eye of the Storm","Elementarbeherrschung":"Elemental Mastery","Gewitter":"Thunderstorm","Ahnenwissen":"Ancestral Knowledge","Donnernde Stöße":"Thundering Strikes","Verbesserter Geisterwolf":"Improved Ghost Wolf","Verbesserte Totems":"Improved Totems","Flurry":"Flurry","Elementarwaffen":"Elemental Weapons","Waffenbeherrschung":"Weapon Mastery","Sturmschlag":"Stormstrike","Zweihandäxte und -streitkolben":"Two-Handed Axes and Maces","Schamanistische Wut":"Shamanistic Rage","Geisterwaffen":"Spirit Weapons","Verbesserte Heilungswelle":"Improved Healing Wave","Totemfokus":"Totemic Focus","Tidenfokus":"Tidal Focus","Verbesserte Reinkarnation":"Improved Reincarnation","Schnelligkeit der Natur":"Nature's Swiftness","Manawoge":"Mana Tide Totem"},"warlock":{"Verbesserte Verderbnis":"Improved Corruption","Unterdrückung":"Suppression","Verbesserter Aderlass":"Improved Life Tap","Verbesserte Pein":"Improved Curse of Agony","Fluch verstärken":"Amplify Curse","Einbruch der Nacht":"Nightfall","Teufelskonzentration":"Fel Concentration","Schattenumschlingung":"Shadow Embrace","Schattenbeherrschung":"Shadow Mastery","Pandemie":"Pandemic","Zermürben":"Attrition","Lebensentzug":"Siphon Life","Verbesserter Gesundheitsstein":"Improved Healthstone","Dämonische Umarmung":"Demonic Embrace","Teufelsintelligenz":"Fel Intellect","Meisterbeschwörer":"Master Summoner","Dämonische Opferung":"Demonic Sacrifice","Seelenverbindung":"Soul Link","Verderben":"Bane","Verbesserter Schattenblitz":"Improved Shadow Bolt","Katastrophe":"Cataclysm","Verwüstung":"Devastation","Ruin":"Ruin","Schattenbrand":"Shadowburn","Feuersbrunst":"Conflagrate"}},"brief":{"hunter":{"Blitzartige Reflexe":"Erhöht deine Beweglichkeit und damit wichtige offensive sowie defensive Werte.","Wilde Schläge":"Verbessert den kritischen Trefferschaden beziehungsweise die Kritchance deiner Nahkampfangriffe.","Tödliche Aspekte":"Verbessert die Wirkung deiner Aspekte.","Beute aufspüren":"Erhöht den Schaden, den du gegen den aufgedeckten Gegner verursachst.","Einsamer Wolf":"Verstärkt die Spielweise ohne aktives Begleitertier.","Falke beschwören":"Beschwört einen Falken als Teil deiner Begleiter-Fähigkeiten."},"priest":{"Sühne":"Heilt ein befreundetes Ziel oder fügt einem feindlichen Ziel heiligen Schaden zu.","Gebet der Besserung":"Legt einen heilenden Effekt auf ein Gruppenmitglied, der bei erlittenem Schaden ausgelöst wird.","Heilige Bindung":"Heilungs-Talent der Forever-Heilig-Spezialisierung; die exakte Wirkung und die Werte findest du in der Client-Beschreibung.","Heilige Nova":"Verursacht heiligen Flächenschaden und heilt Verbündete im Wirkungsbereich."},"warrior":{"Tödlicher Stoß":"Ein starker Waffenangriff, der die erhaltene Heilung des Ziels verringert.","Weitreichende Stöße":"Deine nächsten Nahkampfangriffe treffen ein zusätzliches nahes Ziel.","Rausch des Blutes":"Angriffe gegen mit Verwunden belegte Gegner können Überwältigen ermöglichen.","Zweihandwaffen-Spezialisierung":"Erhöht deinen Schaden mit Zweihand-Nahkampfwaffen."},"druid":{"Wilde Schnelligkeit":"Verbessert deine Bewegung in Katzenform und deinen Ausweichwert.","Rudelführer":"Gewährt einen Gruppenbonus für kritische Treffer in Tiergestalt.","Katzengestalt":"Ermöglicht schnelle Nahkampfangriffe und Energiemanagement.","Omen der Klarsicht":"Ermöglicht gelegentlich kostenlose Fähigkeiten durch einen Klarheitseffekt."},"mage":{"Verbesserter Frostblitz":"Verbessert die Wirkung deines Frostblitzes.","Zertrümmern":"Verbessert deine kritischen Treffer gegen eingefrorene Ziele.","Kälteeinbruch":"Setzt die Abklingzeit mehrerer Frostzauber zurück.","Eisbarriere":"Umgibt dich mit einem Schild, das Schaden absorbiert."},"paladin":{"Siegel des Befehls":"Ermöglicht zusätzliche Heiligschadens-Effekte bei Nahkampfangriffen.","Buße":"Setzt einen Gegner vorübergehend außer Gefecht.","Heiliger Schild":"Verbessert das Blocken und verursacht heiligen Schaden beim Blocken."},"rogue":{"Riposte":"Erlaubt einen Gegenangriff nach einer Parade.","Klingenwirbel":"Trifft zeitweise ein zusätzliches Ziel mit deinen Nahkampfangriffen.","Adrenalinrausch":"Erhöht deine Energieregeneration für kurze Zeit."},"shaman":{"Sturmschlag":"Greift mit deiner Waffe an und unterstützt deinen Naturschaden.","Schamanistische Wut":"Stärkt deine Ressourcenerholung und Verteidigung.","Manawoge":"Stellt Gruppenmitgliedern über ein Totem Mana wieder her."},"warlock":{"Einbruch der Nacht":"Deine Schadens-über-Zeit-Effekte können einen Sofortzauber auslösen.","Lebensentzug":"Entzieht deinem Ziel über Zeit Lebenspunkte.","Seelenverbindung":"Teilt einen Teil des erlittenen Schadens mit deinem Dämon."}}};
  let source = null;
  let activeEl = null;
  let pinned = false;
  let hideTimer = null;
  let savedEvent = null;

  const normalize = (value) => String(value || '').normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g,
    c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  const classLink='https://wow-forever.gg/talents/'+encodeURIComponent(classSlug)+'/';
  const treeEls=Array.from(wrap.querySelectorAll('.full-tree'));
  function currentClass(){
    return source?.classes?.find(c => normalize(c.slug)===normalize(classSlug)) || null;
  }
  function keyRank(el){
    const label=el.querySelector('.tree-rank')?.textContent || '';
    const r=/^\s*(\d+)\s*\/\s*(\d+)\s*$/.exec(label);
    return {rank:r ? Number(r[1]) : 0, max:r ? Number(r[2]) : Number(el.dataset.maxRank)||1};
  }
  function matchTalent(el) {
    const klass=currentClass();
    if(!klass) return null;
    const treeEl=el.closest('.full-tree');
    const treeIndex=treeEls.indexOf(treeEl);
    const tree=klass.trees[treeIndex];
    if(!tree) return null;
    const localName=el.dataset.talent || el.querySelector('.tree-talent-name')?.textContent?.trim() || '';
    const aka=aliasData.aliases?.[classSlug]?.[localName] || localName;
    const candidates=tree.talents || [];
    const match=candidates.find(t=>normalize(t.name)===normalize(aka)) ||
                candidates.find(t=>normalize(t.name)===normalize(localName));
    if (match) return {match,tree,mode:'name'};

    // Order is used only for full client-like trees (same length + same rank + same row).
    // Partial older trees are NOT assigned an arbitrary spell description.
    const locals=Array.from(treeEl.querySelectorAll('.tree-talent'));
    if(locals.length===candidates.length){
      const index=locals.indexOf(el);
      const candidate=candidates[index];
      const row=Array.from(treeEl.querySelectorAll('.tier-row')).findIndex(r=>r.contains(el));
      const expectedMax=Number(el.dataset.maxRank)||1;
      if(candidate && candidate.max_ranks===expectedMax && candidate.row===row){
        return {match:candidate,tree,mode:'order'};
      }
    }
    return null;
  }
  function asDescriptions(spell){
    const desc = spell?.description;
    if(Array.isArray(desc)) return desc.map(x=>String(x || '').trim()).filter(Boolean);
    if(typeof desc==='string' && desc.trim()) return [desc.trim()];
    return [];
  }
  function rankEffect(desc, rank, maximum){
    if(!desc.length) return '';
    // Client may provide just one text for an active 1-point ability.
    if(desc.length===maximum) return desc[Math.max(0,Math.min(rank-1,desc.length-1))];
    if(desc.length===1) return desc[0];
    return desc[Math.max(0,Math.min(rank-1,desc.length-1))];
  }
  function placeTooltip(el,event){
    if(dialog.hidden) return;
    const r=el.getBoundingClientRect();
    const x=event && typeof event.clientX==='number' ? event.clientX : r.left+r.width/2;
    const y=event && typeof event.clientY==='number' ? event.clientY : r.top+r.height/2;
    const gap=13, vw=window.innerWidth, vh=window.innerHeight;
    const w=dialog.offsetWidth, h=dialog.offsetHeight;
    let left=x+gap;
    if(left+w>vw-9) left=x-w-gap;
    left=Math.min(Math.max(9,left),vw-w-9);
    let top=y+gap;
    if(top+h>vh-9) top=y-h-gap;
    top=Math.min(Math.max(9,top),vh-h-9);
    dialog.style.left=Math.round(left)+'px';
    dialog.style.top=Math.round(top)+'px';
  }
  function render(el,event){
    if(!el) return;
    const title=el.dataset.talent || el.querySelector('.tree-talent-name')?.textContent?.trim() || 'Talent';
    const {rank,max}=keyRank(el);
    const currentRank=rank||1;
    const matched=matchTalent(el);
    const tooltipData=matched?.match;
    const descriptions=asDescriptions(tooltipData);
    const notes=aliasData.brief?.[classSlug]?.[title] || '';
    let body='<div class="wtt-rank">'+(rank ? 'Aktueller Rang '+rank+' / '+max : 'Nicht geskillt · Rang 1 / '+max)+'</div>';
    if(descriptions.length){
      body+='<div class="wtt-text">'+esc(rankEffect(descriptions,currentRank,Number(tooltipData.max_ranks)||max))+'</div>';
      if(currentRank<max && descriptions.length>1){
        body+='<div class="wtt-next"><div class="wtt-rank">Nächster Rang '+(currentRank+1)+' / '+max+'</div><div class="wtt-text">'
           +esc(rankEffect(descriptions,currentRank+1,Number(tooltipData.max_ranks)||max))+'</div></div>';
      }
    }else{
      body+= notes ? '<div class="wtt-local">'+esc(notes)+'</div>' : '<div class="wtt-muted">Die genaue Wirkung ist für diesen Talentnamen in den geladenen Forever-Client-Daten noch nicht eindeutig zugeordnet. Bitte im Spiel prüfen.</div>';
      if(!source){
        body+='<div class="wtt-muted">Client-Talentdaten werden geladen oder sind noch nicht lokal heruntergeladen.</div>';
      }
    }
    const spellId=Number(tooltipData?.spell_id)||0;
    const link=spellId>0
      ? 'https://www.wowhead.com/forever/de/spell='+spellId
      : classLink;
    const sourceLabel=spellId>0 ? 'Deutsche Details auf Wowhead öffnen' : 'Forever-Talentrechner öffnen';
    const englishName=tooltipData?.name && normalize(tooltipData.name)!==normalize(title) ? ' · '+esc(tooltipData.name) : '';
    dialog.innerHTML='<button class="wtt-close" type="button" aria-label="Tooltip schließen">×</button>'+
      '<div class="wtt-title">'+esc(title)+'</div>'+
      '<div class="wtt-sub">'+esc(el.dataset.tree || '')+englishName+'</div>'+
      body+
      '<div class="wtt-footer">'+(descriptions.length?'Originalbeschreibung aus WoW Forever (EN), Rangwerte aus dem Client.':'Ohne verifizierte Rangbeschreibung werden keine Zahlen geraten.')+'<br>'+
      '<a href="'+esc(link)+'" target="_blank" rel="noopener noreferrer">'+sourceLabel+' ↗</a></div>';
    dialog.hidden=false;
    dialog.querySelector('.wtt-close')?.addEventListener('click',hide);
    requestAnimationFrame(()=>placeTooltip(el,event));
  }
  function hide(){
    clearTimeout(hideTimer);
    dialog.hidden=true;activeEl=null;pinned=false;savedEvent=null;
  }
  function scheduleHide(){
    if(pinned) return;
    clearTimeout(hideTimer);
    hideTimer=setTimeout(()=>{if(!dialog.matches(':hover'))hide();},190);
  }
  function show(el, event, pin=false){
    clearTimeout(hideTimer);
    activeEl=el;pinned=pin;savedEvent=event;
    render(el,event);
  }
  dialog.addEventListener('mouseenter',()=>clearTimeout(hideTimer));
  dialog.addEventListener('mouseleave',scheduleHide);
  elements.forEach(el=>{
    el.setAttribute('data-wow-tip','');
    el.setAttribute('tabindex','0');
    el.setAttribute('aria-describedby',dialog.id);
    el.removeAttribute('title');
    el.addEventListener('mouseenter',ev=>{if(matchMedia('(hover: hover)').matches)show(el,ev,false);});
    el.addEventListener('mousemove',ev=>{if(activeEl===el && !pinned)placeTooltip(el,ev);});
    el.addEventListener('mouseleave',scheduleHide);
    el.addEventListener('focus',()=>show(el,null,false));
    el.addEventListener('blur',scheduleHide);
    el.addEventListener('click',ev=>{
      // Touch and mouse click can pin/unpin the detail without changing skill points.
      ev.stopPropagation();
      if(pinned && activeEl===el){hide();return;}
      show(el,ev,true);
    });
    el.addEventListener('keydown',ev=>{
      if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();show(el,null,true);}
      if(ev.key==='Escape'){ev.preventDefault();hide();}
    });
  });
  document.addEventListener('pointerdown',ev=>{
    if(pinned && !ev.target.closest('.tree-talent') && !dialog.contains(ev.target))hide();
  });
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape')hide();});
  window.addEventListener('scroll',()=>{if(activeEl)placeTooltip(activeEl,savedEvent);},true);
  window.addEventListener('resize',()=>{if(activeEl)placeTooltip(activeEl,savedEvent);});

  // The level dial changes all rank counters dynamically. Mirror those changes in an open tooltip.
  const rankObserver=new MutationObserver(()=>{
    if(activeEl && !dialog.hidden){render(activeEl,savedEvent);}
  });
  rankObserver.observe(wrap,{subtree:true,characterData:true,childList:true});

  // Both files are local after "Actions → Fetch website assets". The remote JSON
  // is used only if its local copy is not yet available and browser CORS allows it.
  const loadJSON=async(url)=>{
    const response=await fetch(url,{cache:'no-cache'});
    if(!response.ok)throw Error(String(response.status));
    return response.json();
  };
  loadJSON('assets/data/forever-talents.json')
    .catch(()=>loadJSON('https://wow-forever.gg/developers/talents.json'))
    .then(data=>{
      if (Array.isArray(data.classes) && data.classes.length===9) source=data;
      if(activeEl)render(activeEl,savedEvent);
    })
    .catch(()=>{
      if(activeEl)render(activeEl,savedEvent);
    });
})();
