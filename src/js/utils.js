export function calcTileType(index, boardSize) {
  // TODO: write logic here
  // const center;
  if (index === 0) {
    return 'top-left';
  }
  if (index > 0 && index < boardSize - 1) {
    return 'top';
  }
  if (index === boardSize - 1) {
    return 'top-right';
  }
  for (let i = 1; i < boardSize - 1; i += 1) {
    if (index === boardSize * i) {
      return 'left';
    }
  }
  for (let i = 2; i < boardSize; i += 1) {
    if (index === ((boardSize * i) - 1)) {
      return 'right';
    }
  }
  if (index === (boardSize - 1) * boardSize) {
    return 'bottom-left';
  }
  if (index === ((boardSize * boardSize) - 1)) {
    return 'bottom-right';
  }
  if ((index > (boardSize - 1) * boardSize) && index < ((boardSize * boardSize) - 1)) {
    return 'bottom';
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
