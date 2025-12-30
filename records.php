<?php
// htdocs/contoh1/api/records.php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }

$DATA_FILE = __DIR__ . '/../data/records.json';

function read_all($path){
  if (!file_exists($path)) return [];
  $raw = @file_get_contents($path);
  if ($raw === false || $raw === '') return [];
  $json = json_decode($raw, true);
  return is_array($json) ? $json : [];
}
function write_all($path, $arr){
  $dir = dirname($path);
  if (!is_dir($dir)) { @mkdir($dir, 0777, true); }
  $tmp = $path . '.tmp';
  file_put_contents($tmp, json_encode($arr, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
  rename($tmp, $path);
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  echo json_encode(read_all($DATA_FILE), JSON_UNESCAPED_UNICODE);
  exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$op = $input['op'] ?? '';

if ($op === 'upsert') {
  $rec = $input['rec'] ?? null;
  if (!$rec || !isset($rec['id'])) { http_response_code(400); echo json_encode(['error'=>'bad rec']); exit; }
  $all = read_all($DATA_FILE);
  $found = false;
  foreach ($all as $i => $r) {
    if (($r['id'] ?? '') === $rec['id']) {
      $old = strtotime($r['updatedAt'] ?? '0') ?: 0;
      $new = strtotime($rec['updatedAt'] ?? '0') ?: 0;
      $all[$i] = ($new >= $old) ? $rec : $r;
      $found = true; break;
    }
  }
  if (!$found) $all[] = $rec;
  write_all($DATA_FILE, $all);
  echo json_encode(['ok'=>true]); exit;
}

if ($op === 'delete') {
  $id = $input['id'] ?? '';
  if (!$id) { http_response_code(400); echo json_encode(['error'=>'no id']); exit; }
  $all = read_all($DATA_FILE);
  $all = array_values(array_filter($all, fn($r)=> ($r['id'] ?? '') !== $id));
  write_all($DATA_FILE, $all);
  echo json_encode(['ok'=>true]); exit;
}

http_response_code(400);
echo json_encode(['error'=>'unknown op']);
