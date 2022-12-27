

export function createConflictPopUp(data) {
    
    const div = document.createElement('div');
    div.className = 'pop-up';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = data.territory;
    div.appendChild(title);

    const nature = document.createElement('div');
    nature.className = 'nature';
    div.appendChild(nature);

    const since = document.createElement('div');
    since.className = 'since';
    div.appendChild(since);

    const deaths = document.createElement('div');
    deaths.className = 'deaths';
    div.appendChild(deaths);

    const currentStatus = document.createElement('div');
    currentStatus.className = 'current-status';
    div.appendChild(currentStatus);

    const impacts = document.createElement('div');
    impacts.className = 'impacts';
    div.appendChild(impacts);

    const header1 = document.createElement('div');
    header1.className = 'header';
    header1.textContent = 'NATURE OF CONFLICT';
    nature.appendChild(header1);

    const description1 = document.createElement('div');
    description1.className = 'description';
    description1.textContent = data.nature_of_conflict;
    nature.appendChild(description1);

    const header2 = document.createElement('div');
    header2.className = 'header';
    header2.textContent = 'SINCE';
    since.appendChild(header2);

    const description2 = document.createElement('div');
    description2.className = 'description';
    description2.textContent = data.since;
    since.appendChild(description2);

    const header3 = document.createElement('div');
    header3.className = 'header';
    header3.textContent = 'DEATHS';
    deaths.appendChild(header3);

    const description3 = document.createElement('div');
    description3.className = 'description';
    description3.textContent = data.deaths;
    deaths.appendChild(description3);

    const header4 = document.createElement('div');
    header4.className = 'header';
    header4.textContent = 'CURRENT STATUS';
    currentStatus.appendChild(header4);

    const description4 = document.createElement('div');
    description4.className = 'description';
    description4.textContent = data.current_status;
    currentStatus.appendChild(description4);

    const header5 = document.createElement('div');
    header5.className = 'header';
    header5.textContent = 'NOTABLE IMPACTS';
    impacts.appendChild(header5);

    const description5 = document.createElement('div');
    description5.className = 'description';
    description5.textContent = data.notable_impacts;
    impacts.appendChild(description5);

    return div
}




    // <div class="pop-up">
    //     <div class="title">Democratic Republic of Congo</div>
    //     <div class="nature">
    //         <div class="header">NATURE OF CONFLICT</div>
    //         <div class="description">Frequent clashes in the southern Katanga region between government forces and separatist Mai-Mai rebels</div>
    //     </div>
    //     <div class="since">
    //         <div class="header">SINCE</div>
    //         <div class="description">1960</div>
    //     </div>
    //     <div class="deaths">
    //         <div class="header">DEATHS</div>
    //         <div class="description">Around 2,700 (since 1997)</div>
    //     </div>
    //     <div class="current-status">
    //         <div class="header">CURRENT STATUS</div>
    //         <div class="description">A government offensive in 2015 brought some stability to the Katanga region, and IDPs began to tentatively return home but new clashes with armed groups in early 2017 caused new displacement</div>
    //     </div>
    //     <div class="impacts">
    //         <div class="header">NOTABLE IMPACTS</div>
    //         <div class="description">At the height of the violence 607,000 people were affected, suffering displacement and food shortages</div>
    //     </div>
    // </div>