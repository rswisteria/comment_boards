rev_manifest_path = 'public/assets/rev-manifest.json'

p File.exist?('public')
p File.exist?('public/assets')
p File.exist?(rev_manifest_path)

if File.exist?(rev_manifest_path)
  REV_MANIFEST = JSON.parse(File.read(rev_manifest_path))
end