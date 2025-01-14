const client = require('../lib/client');

run();

async function run() {

	try {
    
		await client.query(`
		DROP TABLE IF EXISTS monster_loot CASCADE;
		DROP TABLE IF EXISTS monsters CASCADE;
		DROP TABLE IF EXISTS loot;
        `);

		// eslint-disable-next-line no-console
		console.log('drop tables complete');
	}
	catch(err) {
		// eslint-disable-next-line no-console
		console.log(err);
	}
	finally {
		client.end();
	}
}
