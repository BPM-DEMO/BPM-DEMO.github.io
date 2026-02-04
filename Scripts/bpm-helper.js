// Scripts/bpm-helper.js

async function checkAndNavigate(baseName) {
    const extensions = ['.html', '.aspx'];
    let targetUrl = '';

    for (let ext of extensions) {
        const url = baseName + ext;
        try {
            // ファイルが存在するか確認
            const response = await fetch(url, { method: 'HEAD' });
            if (response.ok) {
                targetUrl = url;
                break;
            }
        } catch (error) {
            console.log(url + " は見つかりません。");
        }
    }

    if (targetUrl) {
        // 見つかったら移動
        window.location.href = targetUrl;
    } else {
        alert("遷移先のファイル（.html または .aspx）が見つかりません。");
    }
}