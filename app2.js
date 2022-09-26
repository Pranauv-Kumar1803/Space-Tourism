// let moon = document.getElementById('moon');
// let mars = document.getElementById('mars');
// let europa = document.getElementById('europa');
// let titan = document.getElementById('titan');

let btns = document.getElementsByTagName('button');
// console.log(btns);

Array.from(btns).forEach(e=>{
	e.addEventListener('click',()=>{
		p=e.id;
		console.log(p);
		if(p==='commander')
		{
            // console.log(document.getElementById('Commander'));
			document.getElementById('Commander').style.display='flex';
			document.getElementById('Pilot').style.display='none';
			document.getElementById('Specialist').style.display='none';
			document.getElementById('Engineer').style.display='none';
		}
		if(p==='engineer')
		{   
            // console.log(document.getElementById('Engineer'));
			document.getElementById('Commander').style.display='none';
			document.getElementById('Pilot').style.display='none';
			document.getElementById('Specialist').style.display='none';
			document.getElementById('Engineer').style.display='flex';
		}
		if(p==='specialist')
		{
            // console.log(document.getElementById('Specialist'));
			document.getElementById('Commander').style.display='none';
			document.getElementById('Pilot').style.display='none';
			document.getElementById('Specialist').style.display='flex';
			document.getElementById('Engineer').style.display='none';
		}
		if(p==='pilot')
		{
            // console.log(document.getElementById('Pilot'));
			document.getElementById('Commander').style.display='none';
			document.getElementById('Pilot').style.display='flex';
			document.getElementById('Specialist').style.display='none';
			document.getElementById('Engineer').style.display='none';
		}
	})
})