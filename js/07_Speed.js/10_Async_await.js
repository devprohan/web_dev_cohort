async function doTasks() {
  try {
    const fileContent = await readFileWithPromise('./hello.txt', 'utf-8');
    console.log('All DOne');
    await writeFileWithPromise('./backup.txt', fileContent);
    await wait(10);
    await unlinkWithPromise('./hello.txt');
    throw new Error('');
  } catch (e) {
    console.log('Error', e);
  } finally {
    console.log('All DOne');
  }
}
