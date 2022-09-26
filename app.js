// let moon = document.getElementById('moon');
// let mars = document.getElementById('mars');
// let europa = document.getElementById('europa');
// let titan = document.getElementById('titan');

let btns = document.getElementsByTagName('button');
// console.log(btns);

Array.from(btns).forEach(e=>{
	e.addEventListener('click',()=>{
		p=e.innerHTML;
		console.log(p);
		if(p==='Moon')
		{
			document.getElementById('Moon').style.display='flex';
			document.getElementById('Mars').style.display='none';
			document.getElementById('Europa').style.display='none';
			document.getElementById('Titan').style.display='none';
		}
		if(p==='Mars')
		{
			document.getElementById('Moon').style.display='none';
			document.getElementById('Mars').style.display='flex';
			document.getElementById('Europa').style.display='none';
			document.getElementById('Titan').style.display='none';
		}
		if(p==='Europa')
		{
			document.getElementById('Moon').style.display='none';
			document.getElementById('Mars').style.display='none';
			document.getElementById('Europa').style.display='flex';
			document.getElementById('Titan').style.display='none';
		}
		if(p==='Titan')
		{
			document.getElementById('Moon').style.display='none';
			document.getElementById('Mars').style.display='none';
			document.getElementById('Europa').style.display='none';
			document.getElementById('Titan').style.display='flex';
		}
	})
})