module ApplicationHelper
  def gulp_asset_path(path)
    if Rails.env == 'production'
      new_path = REV_MANIFEST[path] if defined?(REV_MANIFEST)
      raise "path miss match error: #{path}" if new_path.blank?
    else
      rev_manifest_path = 'public/assets/rev-manifest.json'
      if File.exist?(rev_manifest_path)
        rev_manifest = JSON.parse(File.read(rev_manifest_path))
      end
      new_path = rev_manifest[path] if rev_manifest.present?
      raise "path miss match error: #{path}" if new_path.blank?
    end

    return "/assets/javascripts/#{new_path}" if new_path.end_with?('.js')
    "/assets/stylesheets/#{new_path}" if new_path.end_with?('.css')
  end
end
