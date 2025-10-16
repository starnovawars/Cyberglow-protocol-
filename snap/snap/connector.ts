export async function connectSnap() {
  const snaps = await window.ethereum?.request({
    method: 'wallet_getSnaps'
  });

  const isInstalled = Object.values(snaps || {}).some(
    (snap: any) => snap.id === 'npm:@iota/snap'
  );

  if (!isInstalled) {
    await window.ethereum?.request({
      method: 'wallet_enable',
      params: [{ wallet_snap: { 'npm:@iota/snap': {} } }]
    });
  }

  console.log('Snap is ready');
}
